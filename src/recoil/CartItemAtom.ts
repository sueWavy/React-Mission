import { atom, selector } from "recoil";

const CART_ITEM_STORAGE_KEY: string = "cartItem";

// Retrieve data from localStorage and parse it into an array of Product objects
const initialCartItemData: Product[] = JSON.parse(
  localStorage.getItem(CART_ITEM_STORAGE_KEY) || "[]"
);

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  quantity: number;
};

export const CartItemAtom = atom<Product[]>({
  key: "CartItemAtom",
  default: initialCartItemData,
});

export const TotalPriceSelector = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const CartItem = get(CartItemAtom);
    return CartItem.reduce((totalPrice, item) => {
      if (item.quantity > 0) {
        totalPrice += item.price * item.quantity;
      }
      return totalPrice;
    }, 0);
  },
});

export const saveCartItemToLocalStorage = (cartItemData: Product[]) => {
  localStorage.setItem(CART_ITEM_STORAGE_KEY, JSON.stringify(cartItemData));
};
