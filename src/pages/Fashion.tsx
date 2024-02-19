import React from "react";
import CategorySection from "../components/CategorySection";
import { useRecoilValue } from "recoil";
import { ShopDataAtom } from "../recoil/ShopDataAtom";

export default function Fashion() {
  const item = useRecoilValue(ShopDataAtom);

  return (
    <div className="bg-slate-700">
      <p className="pl-24 pt-6 text-slate-400 font-semibold ">홈 &gt; 패션</p>
      <CategorySection
        category={"men's clothing"}
        title={"패션"}
        data={item}
        isPage={true}
      />
    </div>
  );
}
