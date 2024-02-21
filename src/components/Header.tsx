import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="w-full h-16 flex justify-between items-center  text-xl font-bold pl-20 pr-20 shadow-md"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
    >
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
            <ThemeButton />
          </li>
          <li className="mr-3">
            <input className="p-2 " type="text" placeholder="검색" />
          </li>
          <li>
            <button onClick={() => navigate("/cart")}>
              <BsCart4 />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
