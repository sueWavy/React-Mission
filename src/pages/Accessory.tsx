import React from "react";
import { useRecoilValue } from "recoil";
import CategorySection from "../components/CategorySection";
import { ShopDataAtom } from "../recoil/ShopDataAtom";

export default function Accessory() {
  const item = useRecoilValue(ShopDataAtom);

  return (
    <div className="bg-white dark:bg-slate-700">
      <CategorySection
        category={"jewelery"}
        title={"액세서리"}
        data={item}
        isPage={true}
      />
    </div>
  );
}
