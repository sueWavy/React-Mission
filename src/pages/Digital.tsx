import React from "react";
import { useRecoilValue } from "recoil";
import { ShopDataAtom } from "../recoil/ShopDataAtom";
import CategorySection from "../components/CategorySection";

export default function Digital() {
  const item = useRecoilValue(ShopDataAtom);

  return (
    <div className="bg-white dark:bg-slate-700">
      <CategorySection
        category={"electronics"}
        title={"디지털"}
        data={item}
        isPage={true}
      />
    </div>
  );
}
