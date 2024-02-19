import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-700 text-slate-400">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-4xl mt-10 mb-10">페이지를 찾을 수 없습니다.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-violet-500 cursor-pointer text-white px-12 py-6 rounded-xl text-2xl hover:bg-violet-600"
      >
        메인으로
      </button>
    </div>
  );
}
