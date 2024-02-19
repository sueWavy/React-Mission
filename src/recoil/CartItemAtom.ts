import { atom, selector } from "recoil";

export const CartItemAtom = atom({
  key: "CartItemAtom",
  default: [],
});

export const TotalCartSelector = selector({
  key: "TotalCartSelector",
  get: ({ get }) => {
    const CartItem = get(CartItemAtom);
    return CartItem.length;
  },
});

export const TotalPriceSelector = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const CartItem = get(CartItemAtom);
    return CartItem.reduce((누적값, 현재값) => 누적값 + 현재값, 0);
  },
});
