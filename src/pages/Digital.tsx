import React from "react";
import { useRecoilValue } from "recoil";
import { ShopDataAtom } from "../recoil/ShopDataAtom";
import CategorySection from "../components/CategorySection";

export default function Digital() {
  const item = useRecoilValue(ShopDataAtom);

  return (
    <div className="bg-slate-700">
      <p className="pl-24 pt-6 text-slate-400 font-semibold ">홈 &gt; 디지털</p>
      <CategorySection
        category={"electronics"}
        title={"디지털"}
        data={item}
        isPage={true}
      />
    </div>
  );
}
