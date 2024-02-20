import React from "react";
import Carousel from "../components/Carousel";
import CategorySection from "../components/CategorySection";
import { useRecoilValue } from "recoil";
import { ShopDataAtom } from "../recoil/ShopDataAtom";

export default function Home() {
  const item = useRecoilValue(ShopDataAtom);
  return (
    <div className="bg-white dark:bg-slate-700">
      <Carousel />
      <CategorySection
        category={"men's clothing"}
        title={"패션"}
        data={item}
        isPage={false}
      />
      <CategorySection
        category={"jewelery"}
        title={"액세서리"}
        data={item}
        isPage={false}
      />
      <CategorySection
        category={"electronics"}
        title={"디지털"}
        data={item}
        isPage={false}
      />
    </div>
  );
}
