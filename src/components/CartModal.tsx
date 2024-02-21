import React from "react";

export default function CartModal({ handlePurchase, handleModal }) {
  return (
    <div className="fixed w-full h-full bg-black bg-opacity-50  z-40 flex justify-center items-center">
      <div className="absolute top-64 flex flex-col justify-between w-3/12 h-48 p-7 bg-white dark:bg-slate-600 rounded-xl shadow-lg text-black dark:text-slate-200">
        <div className="">
          <h1 className="text-xl mb-5">정말로 구매하시겠습니까?</h1>
          <p className="text-base">장바구니의 모든 상품들이 삭제됩니다.</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handlePurchase}
            className="w-10 h-10 bg-violet-600 rounded-lg mr-2 cursor-pointer hover:bg-violet-700  text-white"
          >
            네
          </button>
          <button
            onClick={handleModal}
            className="w-20 h-10 bg-inherit border rounded-lg cursor-pointer hover:text-white hover:bg-black dark:hover:bg-gray-400 dark:hover:text-black hover:border-none text-black dark:text-gray-300"
          >
            아니오
          </button>
        </div>
      </div>
    </div>
  );
}
