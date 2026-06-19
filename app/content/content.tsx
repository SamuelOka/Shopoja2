import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { ProT } from "../components/product";
import { Dispatch } from "react";
export type PropsContent = {
  id: number;
  quantity: number;
  price: number;
  image: string;
  name: string;
};

const cartContent = createContext<CartContextProps | null>(null);
export type ActionProps =
  | {
      type: "ADD_CART";
      payload: {
        id: number;
        quantity: number;
        price: number;
        image: string;
        name: string;
      };
    }
  | { type: "DELETE_FROM_CART"; payload: number }
  | { type: "ADD_QTY"; payload: number }
  | { type: "REDUCE_QTY"; payload: number }
  | { type: "CLEAR_CART" };

function cartReducer(state: PropsContent[], action: ActionProps) {
  switch (action.type) {
    case "ADD_CART": {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, action.payload];
    }
    case "DELETE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    case "ADD_QTY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    case "REDUCE_QTY":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
interface CartContextProps {
  cart: PropsContent[];
  dispatch: Dispatch<ActionProps>;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  function InitialCart() {
    if (typeof window === "undefined") return [];
    try {
      const data = localStorage.getItem("cart");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  const [cart, dispatch] = useReducer(cartReducer, undefined, InitialCart);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <cartContent.Provider value={{ cart, dispatch }}>
      {children}
    </cartContent.Provider>
  );
}

export function useCart() {
  const context = useContext(cartContent);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
