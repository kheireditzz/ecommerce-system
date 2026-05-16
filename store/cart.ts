import { create } from "zustand";
import { Product } from "@/lib/types";

type State = {
  items: (Product & { qty: number })[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: () => number;
};

export const useCart = create<State>((set, get) => ({
  items: [],

  add: (p) =>
    set((state) => {
      const exist = state.items.find((i) => i.id === p.id);

      if (exist) {
        return {
          items: state.items.map((i) =>
            i.id === p.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }

      return { items: [...state.items, { ...p, qty: 1 }] };
    }),

  remove: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clear: () => set({ items: [] }),

  total: () =>
    get().items.reduce((a, b) => a + b.price * b.qty, 0),
}));
