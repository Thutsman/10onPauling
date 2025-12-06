-- Add status column to stay_bookings table
-- Run this in your Supabase SQL editor

ALTER TABLE stay_bookings 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- Create an index for faster queries by status
CREATE INDEX IF NOT EXISTS idx_stay_bookings_status ON stay_bookings(status);

-- Add a comment to the column
COMMENT ON COLUMN stay_bookings.status IS 'Booking status: pending or booked';

