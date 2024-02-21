import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { useRecoilValue } from "recoil";
import { CartItemAtom } from "../recoil/CartItemAtom";
import { ShopDataAtom } from "../recoil/ShopDataAtom";

export default function Header() {
  const shopItem = useRecoilValue(ShopDataAtom);
  const totalQuantity = useRecoilValue(CartItemAtom);
  const total = totalQuantity.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredItems = shopItem.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <header
      className="w-full xl:h-16 sm:h-32 flex xl:justify-between sm:justify-evenly items-center  text-xl font-bold pl-20 pr-20 shadow-md xl:flex-row sm:flex-col "
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
    >
      <div>
        <ul className="flex justify-around w-80 cursor-pointer ">
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
          <li className="mr-3 relative">
            <input
              className="p-2 "
              type="text"
              placeholder="검색"
              value={searchText}
              onChange={handleSearch}
            />
            <div className="absolute bg-inherit ">
              <ul className="mt-2.5 max-h-96 overflow-y-scroll">
                {searchText !== "" &&
                  filteredItems.map((item) => (
                    <li
                      className="bg-white dark:bg-slate-400 text-center text-base p-3 cursor-pointer"
                      key={item.id}
                      onClick={() => navigate(`product/${item.id}`)}
                    >
                      {item.title.length > 45
                        ? `${item.title.slice(0, 45)}···`
                        : item.title}
                    </li>
                  ))}
              </ul>
            </div>
          </li>

          <li className="relative">
            <button onClick={() => navigate("/cart")}>
              <BsCart4 />
            </button>
            <div className="absolute bottom-4 left-3 bg-red-600 rounded-xl pl-2 pr-2 text-sm text-white">
              {total}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
