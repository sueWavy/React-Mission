import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartItemAtom } from "../recoil/CartItemAtom";
import { useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";

export default function Cart() {
  const [cartItem, setCartItem] = useRecoilState(CartItemAtom);
  const navigate = useNavigate();

  return (
    <div className="mt-28">
      <p className="pl-24  text-black dark:text-slate-400">홈 &gt; 장바구니</p>
      <div className="flex justify-between pl-20 pr-20 mb-52">
        <div className="mt-20">
          {cartItem.length !== 0 ? (
            cartItem.map((item) => <CartItems key={item.id} item={item} />)
          ) : (
            <div>
              <p className="mb-10 text-3xl dark:text-slate-400 ">
                장바구니에 물품이 없습니다.
              </p>
              <button
                className="bg-violet-600 text-white rounded-lg p-3.5 hover:bg-violet-700"
                onClick={() => navigate("/")}
              >
                담으러 가기
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-around">
          <p className="text-3xl dark:text-slate-400">총 : $</p>
          <button className="ml-6 bg-violet-600 text-white rounded-lg p-3.5 hover:bg-violet-700">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
