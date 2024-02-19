import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ item }) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div
      onClick={goDetail}
      className="flex flex-col w-96 rounded-tl-2xl rounded-tr-2xl bg-white text-slate-300 text-xl cursor-pointer"
    >
      <div className="flex w-full h-96 items-center justify-center">
        <img className="w-36 h-auto" src={item.image} />
      </div>
      <div className="flex flex-col  justify-around items-center text-center   bg-slate-500 w-full h-44">
        <p className="whitespace-pre-line">{item.title}</p>
        <span className="">$ {item.price}</span>
      </div>
    </div>
  );
}
