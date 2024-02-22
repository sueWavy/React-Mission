export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

import { atom, selector } from "recoil";

export const ShopDataAtom = atom<Product[]>({
  key: "ShopDataAtom",
  default: [],
});
