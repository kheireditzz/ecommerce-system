import { useSyncExternalStore } from "react";
import { Product } from "@/lib/types";

type CartProduct = Product & { qty: number };

type CartState = {
  items: CartProduct[];
};

const state: CartState = { items: [] };
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function useCart() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const add = (p: Product) => {
    const exist = state.items.find((i) => i.id === p.id);
    if (exist) {
      state.items = state.items.map((i) =>
        i.id === p.id ? { ...i, qty: i.qty + 1 } : i
      );
    } else {
      state.items = [...state.items, { ...p, qty: 1 }];
    }
    emit();
  };

  const remove = (id: string) => {
    state.items = state.items.filter((i) => i.id !== id);
    emit();
  };

  const clear = () => {
    state.items = [];
    emit();
  };

  const total = () => state.items.reduce((a, b) => a + b.price * b.qty, 0);

  return {
    items: snapshot.items,
    add,
    remove,
    clear,
    total,
  };
}
