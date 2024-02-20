import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function CategorySection({ title, data, category, isPage }) {
  const [whatCategory, setWhatCategory] = useState("");

  const filterCategory = data.filter((it) => {
    return it.category === category;
  });

  const isSlice = isPage ? filterCategory : filterCategory.slice(0, 4);

  useEffect(() => {
    let targetCategory = "";
    switch (category) {
      case "jewelery":
        targetCategory = "액세서리";
        break;
      case "men's clothing":
        targetCategory = "패션";
        break;
      case "electronics":
        targetCategory = "디지털";
        break;
      default:
        console.log("없음");
    }
    setWhatCategory(targetCategory);
  }, []);

  return (
    <div className="mt-28 pb-10 pl-20 pr-20">
      <p className="pl-5 mt-24 text-gray-500 dark:text-slate-300 ">
        홈 &gt; {whatCategory}
      </p>
      <h1 className="text-center text-4xl text-black dark:text-gray-400 font-bold">
        {title}
      </h1>
      <div className="grid grid-cols-1 gap-8 justify-items-center mt-10 md:grid-cols-4">
        {isSlice.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
