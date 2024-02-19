import React from "react";
import ItemCard from "./ItemCard";

export default function CategorySection({ title, data, category, isPage }) {
  const filterCategory = data.filter((it) => {
    return it.category === category;
  });

  const isSlice = isPage ? filterCategory : filterCategory.slice(0, 4);

  return (
    <div className="mt-10 pb-10 pl-20 pr-20">
      <h1 className="text-center text-4xl text-gray-400 font-bold">{title}</h1>
      <div className="grid grid-cols-1 gap-8 justify-items-center mt-10 md:grid-cols-4">
        {isSlice.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
