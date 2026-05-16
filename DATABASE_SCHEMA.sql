-- Ensure UUID function is available
create extension if not exists "uuid-ossp";

-- Create users table
create table if not exists users (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  name text,
  role text default 'user' check (role in ('user', 'admin')),
  created_at timestamp with time zone default now()
);

-- Create products table
create table if not exists products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price numeric not null,
  image_url text,
  stock integer default 0,
  category text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create cart table
create table if not exists cart (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid not null references users(id) on delete cascade,
  product_id uuid not null references products(id) on delete cascade,
  quantity integer default 1 check (quantity > 0),
  created_at timestamp with time zone default now()
);

-- Create orders table
create table if not exists orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid not null references users(id) on delete cascade,
  product_id uuid not null references products(id) on delete restrict,
  quantity integer not null check (quantity > 0),
  total_price numeric not null,
  status text default 'pending' check (status in ('pending', 'paid', 'success', 'cancelled')),
  payment_method text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table users enable row level security;
alter table cart enable row level security;
alter table orders enable row level security;
alter table products enable row level security;

-- Policies for users table
drop policy if exists "Users can view their own data" on users;
create policy "Users can view their own data" on users
  for select using (auth.uid() = id);

drop policy if exists "Users can update their own data" on users;
create policy "Users can update their own data" on users
  for update using (auth.uid() = id);

-- Policies for products table
drop policy if exists "Products are readable by all" on products;
create policy "Products are readable by all" on products
  for select using (true);

drop policy if exists "Only admins can insert products" on products;
create policy "Only admins can insert products" on products
  for insert with check (
    exists (select 1 from users where users.id = auth.uid() and users.role = 'admin')
  );

drop policy if exists "Only admins can update products" on products;
create policy "Only admins can update products" on products
  for update using (
    exists (select 1 from users where users.id = auth.uid() and users.role = 'admin')
  );

drop policy if exists "Only admins can delete products" on products;
create policy "Only admins can delete products" on products
  for delete using (
    exists (select 1 from users where users.id = auth.uid() and users.role = 'admin')
  );

-- Policies for cart table
drop policy if exists "Users can view their own cart" on cart;
create policy "Users can view their own cart" on cart
  for select using (auth.uid() = user_id);

drop policy if exists "Users can insert into their cart" on cart;
create policy "Users can insert into their cart" on cart
  for insert with check (auth.uid() = user_id);

drop policy if exists "Users can update their cart" on cart;
create policy "Users can update their cart" on cart
  for update using (auth.uid() = user_id);

drop policy if exists "Users can delete from their cart" on cart;
create policy "Users can delete from their cart" on cart
  for delete using (auth.uid() = user_id);

-- Policies for orders table
drop policy if exists "Users can view their own orders" on orders;
create policy "Users can view their own orders" on orders
  for select using (auth.uid() = user_id);

drop policy if exists "Users can insert orders" on orders;
create policy "Users can insert orders" on orders
  for insert with check (auth.uid() = user_id);

drop policy if exists "Users can update their own orders" on orders;
create policy "Users can update their own orders" on orders
  for update using (auth.uid() = user_id);
