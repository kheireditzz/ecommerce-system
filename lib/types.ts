export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
};

export type CartItem = Product & {
  qty: number;
};

export type Order = {
  id: string;
  created_at: string;
  status: "pending" | "paid" | "success" | "cancelled";
  quantity: number;
  total_price: number;
  product?: Product | null;
};
