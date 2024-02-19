import React from "react";
import { useRecoilValue } from "recoil";
import CategorySection from "../components/CategorySection";
import { ShopDataAtom } from "../recoil/ShopDataAtom";

export default function Accessory() {
  const item = useRecoilValue(ShopDataAtom);

  return (
    <div className="bg-slate-700">
      <p className="pl-24 pt-6 text-slate-400 font-semibold ">
        홈 &gt; 액세서리
      </p>
      <CategorySection
        category={"jewelery"}
        title={"액세서리"}
        data={item}
        isPage={true}
      />
    </div>
  );
}
