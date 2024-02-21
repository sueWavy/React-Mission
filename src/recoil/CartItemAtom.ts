import { atom, selector } from "recoil";

const CART_ITEM_STORAGE_KEY = "cartItem";

const initialCartItemData =
  JSON.parse(localStorage.getItem(CART_ITEM_STORAGE_KEY)) || [];

export const CartItemAtom = atom({
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

export const saveCartItemToLocalStorage = (cartItemData) => {
  localStorage.setItem(CART_ITEM_STORAGE_KEY, JSON.stringify(cartItemData));
};
