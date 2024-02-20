import React from "react";
import CategorySection from "../components/CategorySection";
import { useRecoilValue } from "recoil";
import { ShopDataAtom } from "../recoil/ShopDataAtom";

export default function Fashion() {
  const item = useRecoilValue(ShopDataAtom);

  return (
    <div className="bg-white dark:bg-slate-700">
      <CategorySection
        category={"men's clothing"}
        title={"패션"}
        data={item}
        isPage={true}
      />
    </div>
  );
}
