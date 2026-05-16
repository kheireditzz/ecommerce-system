# 🛍️ ShopHub - E-Commerce System

Modern e-commerce platform built with **Next.js**, **TypeScript**, and **Supabase**.

## 🚀 Features

### User Features
- ✅ Browse products with detailed information
- ✅ Add/remove products to/from cart
- ✅ View shopping cart with quantity management
- ✅ Purchase items with order tracking
- ✅ View purchase history and order status
- ✅ Download invoices
- ✅ WhatsApp integration for support

### Admin Features
- ✅ Add, edit, delete products
- ✅ Manage product inventory
- ✅ View all orders
- ✅ Update order status
- ✅ View all users

## 📋 System Architecture

```
🏠 Home
   ↓
📦 Products
   ↓
➕ Add to Cart
   ↓
🛒 Cart Page
   ↓
💳 Checkout
   ↓
📜 Order (History)
   ↓
📥 Download Invoice
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL with Row Level Security

## 📦 Database Schema

### Tables

1. **users** - User accounts and authentication
2. **products** - Product catalog
3. **cart** - User shopping carts
4. **orders** - Purchase history

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kheireditzz/ecommerce-system.git
   cd ecommerce-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   - Create `.env.local` file
   - Add Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Setup Database**
   - Go to Supabase Dashboard
   - Open SQL Editor
   - Run the queries in `DATABASE_SCHEMA.sql`

5. **Run development server**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── globals.css
│   ├── products/
│   │   ├── page.tsx (Products list)
│   │   └── [id]/
│   │       └── page.tsx (Product detail)
│   ├── cart/
│   │   └── page.tsx (Cart)
│   ├── history/
│   │   └── page.tsx (Order history)
│   ├── login/
│   │   └── page.tsx (Authentication)
│   └── admin/
│       ├── dashboard/
│       ├── products/
│       ├── orders/
│       └── users/
├── components/
│   ├── Navbar.tsx
│   ├── Products/
│   │   └── ProductCard.tsx
│   ├── Cart/
│   │   └── CartItem.tsx
│   └── History/
│       └── OrderItem.tsx
├── lib/
│   ├── supabase.ts (Database functions)
│   ├── types.ts (TypeScript types)
│   └── utils.ts (Utility functions)
└── DATABASE_SCHEMA.sql
```

## 🔑 Key Files

- **`lib/supabase.ts`** - Supabase client and database functions
- **`lib/types.ts`** - TypeScript interfaces
- **`DATABASE_SCHEMA.sql`** - Database setup script with RLS policies
- **`.env.local`** - Environment variables (Supabase credentials)

## 📱 Pages Status

| Page | Status | Description |
|------|--------|-------------|
| Home | ✅ Done | Landing page with features |
| Products | 🔄 In Progress | Product listing |
| Product Detail | ⏳ TODO | Single product view |
| Cart | ⏳ TODO | Shopping cart |
| History | ⏳ TODO | Order history |
| Login | ⏳ TODO | Authentication |
| Admin Dashboard | ⏳ TODO | Admin panel |

## 🔐 Security

- Row Level Security (RLS) enabled on all tables
- User authentication via Supabase Auth
- Only authenticated users can access cart and orders
- Only admins can manage products

## 🌐 API Endpoints

### Cart
- `POST /api/cart/add` - Add to cart
- `GET /api/cart` - Get cart items
- `PATCH /api/cart/update` - Update quantity
- `DELETE /api/cart/remove` - Remove item

### Products
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get product detail
- `POST /api/products` - Create (admin only)
- `PATCH /api/products/[id]` - Update (admin only)
- `DELETE /api/products/[id]` - Delete (admin only)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders/checkout` - Create order
- `GET /api/orders/[id]` - Get order detail

## 💳 Payment Integration

- WhatsApp integration for checkout
- Multiple payment methods support
- Invoice generation and download

## 📞 Support

For support, contact via:
- Email: support@shophub.com
- WhatsApp: Coming soon

## 📄 License

MIT License - feel free to use this project

## 👨‍💻 Author

Built by Kheireditz

---

**Happy Shopping! 🛍️**
