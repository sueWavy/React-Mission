import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full h-16 flex justify-between items-center bg-slate-900  text-white text-xl font-bold pl-20 pr-20">
      <div>
        <ul className="flex justify-around w-80 cursor-pointer">
          <li onClick={() => navigate("/")}>React Shop</li>
          <li onClick={() => navigate("/fashion")}>패션</li>
          <li onClick={() => navigate("/accessory")}>액세서리</li>
          <li onClick={() => navigate("/digital")}>디지털</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-evenly items-center">
          <li className="mr-3">
            <button>
              <IoSunnyOutline />
            </button>
          </li>
          <li className="mr-3">
            <input
              className="p-2 bg-slate-500"
              type="text"
              placeholder="검색"
            />
          </li>
          <li>
            <button>
              <BsCart4 />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
