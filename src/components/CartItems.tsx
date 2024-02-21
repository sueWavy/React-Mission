import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartItems({
  item,
  quantity,
  increaseItem,
  decreaseItem,
}) {
  if (quantity === 0) {
    return null;
  }

  const navigate = useNavigate();

  return (
    <div className="flex items-center mt-4">
      <img
        className="w-72 h-52 object-contain bg-white rounded-xl p-5 cursor-pointer"
        src={item.image}
        onClick={() => navigate(`/product/${item.id}`)}
      />
      <div className="ml-10 flex flex-col justify-evenly h-44">
        <p
          className="text-2xl font-bold dark:text-slate-400 hover:underline cursor-pointer"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          {item.title}
        </p>
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
