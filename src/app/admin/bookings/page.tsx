"use client";

import * as React from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Clock, LogOut, RefreshCw, AlertCircle, Car, Hotel } from "lucide-react";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  country_code: string;
  check_in: string;
  check_out: string;
  room_type: string;
  guests: number;
  special_requests: string | null;
  status?: string;
  created_at: string;
}

interface CarBooking {
  id: string;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  pickup_date: string;
  return_date: string;
  vehicle_type: string;
  add_ons: string[];
  status?: string;
  created_at: string;
}

type ActiveTab = "stay" | "car";

export default function AdminBookingsPage() {
  const [activeTab, setActiveTab] = React.useState<ActiveTab>("stay");
  const [stayBookings, setStayBookings] = React.useState<Booking[]>([]);
  const [carBookings, setCarBookings] = React.useState<CarBooking[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [error, setError] = React.useState("");
  const [updating, setUpdating] = React.useState<string | null>(null);

  // Simple password protection - should be set in environment variable
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

  React.useEffect(() => {
    // Check if already authenticated (stored in sessionStorage)
    const auth = sessionStorage.getItem("admin_authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchBookings("stay");
      fetchBookings("car");
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
      fetchBookings("stay");
      fetchBookings("car");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const fetchBookings = async (tab: ActiveTab) => {
    try {
      setLoading(true);
      setError("");
      if (tab === "stay") {
        const { data, error } = await supabase
          .from("stay_bookings")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setStayBookings((data as Booking[]) || []);
      } else {
        const { data, error } = await supabase
          .from("car_rental_requests")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setCarBookings((data as CarBooking[]) || []);
      }
    } catch (err: any) {
      console.error("Error fetching bookings:", err);
      setError(`Error loading bookings: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id: string, status: string, tab: ActiveTab) => {
    try {
      setUpdating(id);
      setError("");
      const table = tab === "stay" ? "stay_bookings" : "car_rental_requests";
      const { error } = await supabase.from(table).update({ status }).eq("id", id);

      if (error) throw error;
      
      // Refresh bookings
      await fetchBookings(tab);
    } catch (err: any) {
      console.error("Error updating booking:", err);
      setError(`Error updating booking: ${err.message}`);
    } finally {
      setUpdating(null);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
    setStayBookings([]);
    setCarBookings([]);
    setPassword("");
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatRoomType = (roomType: string) => {
    return roomType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const currentBookings = activeTab === "stay" ? stayBookings : carBookings;
  const pendingBookings = currentBookings.filter(
    (b: any) => !b.status || b.status === "pending" || b.status === "held"
  );
  const bookedBookings = currentBookings.filter(
    (b: any) => b.status === "booked" || b.status === "confirmed"
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full border">
          <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
          <p className="text-muted-foreground mb-6 text-sm">
            Enter password to access bookings management
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                placeholder="Enter admin password"
                required
                autoFocus
              />
            </div>
            {error && (
              <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-destructive text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              </div>
            )}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Bookings Management</h1>
              <p className="text-sm text-muted-foreground mt-1">
                10 On Pauling Hotel - Admin Dashboard
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  fetchBookings(activeTab);
                }}
                disabled={loading}
                size="sm"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button variant="outline" onClick={handleLogout} size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <Button
            variant={activeTab === "stay" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveTab("stay");
              if (stayBookings.length === 0) fetchBookings("stay");
            }}
          >
            <Hotel className="w-4 h-4 mr-2" />
            Stay Bookings
          </Button>
          <Button
            variant={activeTab === "car" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveTab("car");
              if (carBookings.length === 0) fetchBookings("car");
            }}
          >
            <Car className="w-4 h-4 mr-2" />
            Car Rental Requests
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold">{currentBookings.length}</p>
              </div>
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingBookings.length}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">{bookedBookings.length}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Loading bookings...</p>
          </div>
        ) : currentBookings.length === 0 ? (
          <div className="text-center py-12 bg-card border rounded-lg">
            <p className="text-muted-foreground">No bookings found</p>
          </div>
        ) : (
          <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Guest Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Room Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Check-in
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Check-out
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Guests
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {currentBookings.map((booking: any) => (
                    <tr
                      key={booking.id}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {activeTab === "stay" ? (
                          <>
                            <div className="font-medium">{booking.name}</div>
                            {booking.special_requests && (
                              <div className="text-xs text-muted-foreground mt-1 max-w-xs truncate">
                                {booking.special_requests}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="font-medium">
                            {booking.customer_name || "Unknown guest"}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {activeTab === "stay" ? (
                          <>
                            <div className="text-sm">{booking.email}</div>
                            <div className="text-xs text-muted-foreground">
                              {booking.country_code} {booking.phone}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-sm">{booking.customer_email}</div>
                            <div className="text-xs text-muted-foreground">
                              {booking.customer_phone}
                            </div>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {activeTab === "stay" ? (
                          <span className="text-sm capitalize">
                            {formatRoomType(booking.room_type)}
                          </span>
                        ) : (
                          <span className="text-sm capitalize">
                            {booking.vehicle_type}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {formatDate(activeTab === "stay" ? booking.check_in : booking.pickup_date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {formatDate(activeTab === "stay" ? booking.check_out : booking.return_date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {activeTab === "stay"
                          ? `${booking.guests} ${booking.guests === 1 ? "guest" : "guests"}`
                          : booking.add_ons?.length
                          ? `Add-ons: ${booking.add_ons.join(", ")}`
                          : "No add-ons"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}
                        >
                          {booking.status || "pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          {booking.status !== "confirmed" && (
                            <Button
                              size="sm"
                              onClick={() =>
                                updateBookingStatus(
                                  booking.id,
                                  "confirmed",
                                  activeTab
                                )
                              }
                              disabled={updating === booking.id}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              {updating === booking.id ? (
                                <>
                                  <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                                  Updating...
                                </>
                              ) : (
                                <>
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  Mark as Confirmed
                                </>
                              )}
                            </Button>
                          )}
                          {booking.status === "confirmed" && (
                            <span className="text-xs text-muted-foreground flex items-center">
                              <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" />
                              Confirmed
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

