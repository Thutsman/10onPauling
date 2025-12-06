This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Admin Bookings Management

The project includes an admin page for managing bookings at `/admin/bookings`.

### Setup

1. **Environment Variable**: Add the following to your `.env.local` file:
   ```
   NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password-here
   ```

2. **Supabase Table**: Ensure your `stay_bookings` table has a `status` column:
   ```sql
   ALTER TABLE stay_bookings 
   ADD COLUMN status TEXT DEFAULT 'pending';
   ```

### Access

- Navigate to: `http://localhost:3000/admin/bookings` (development)
- Or: `https://yourdomain.com/admin/bookings` (production)
- Enter the admin password set in `NEXT_PUBLIC_ADMIN_PASSWORD`

### Features

- View all bookings in a table format
- Mark bookings as "booked" status
- Filter by status (pending/booked)
- View booking statistics
- Session-based authentication (clears on browser close)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
