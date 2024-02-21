import React, { useEffect, useState } from "react";

export default function CartItems({
  item,
  quantity,
  increaseItem,
  decreaseItem,
}) {
  if (quantity === 0) {
    return null;
  }

  return (
    <div className="flex items-center mt-4">
      <img
        className="w-72 h-52 object-contain bg-white rounded-xl p-5"
        src={item.image}
      />
      <div className="ml-10 flex flex-col justify-evenly h-44">
        <p className="text-2xl font-bold dark:text-slate-400">{item.title}</p>
        <p className="text-4xl dark:text-slate-400">
          ${Math.round(quantity * item.price)} (${item.price})
        </p>
        <div className="flex items-center">
          <button
            onClick={() => decreaseItem(item.id)}
            className="bg-violet-600 p-5 rounded-l-lg text-white"
          >
            -
          </button>
          <p className="text-xl dark:text-slate-400 p-5">{quantity}</p>
          <button
            onClick={() => increaseItem(item.id)}
            className="bg-violet-600 p-5 rounded-r-lg text-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
