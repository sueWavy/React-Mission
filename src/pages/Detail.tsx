import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ShopDataAtom } from "../recoil/ShopDataAtom";

export default function Detail() {
  const item = useRecoilValue(ShopDataAtom);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const { id } = useParams();

  useEffect(() => {
    const targetItem = item.find((it) => parseInt(it.id) === parseInt(id));
    let targetCategory = "";

    if (targetItem) {
      setData(targetItem);

      switch (targetItem.category) {
        case "jewelery":
          targetCategory = "액세서리";
          break;
        case "men's clothing":
          targetCategory = "패션";
          break;
        case "electronics":
          targetCategory = "디지털";
          break;
        default:
          console.log("없음");
      }
      setCategory(targetCategory);
    } else {
      alert("존재하지 않는 제품입니다.");
      navigate("/", { replace: true });
    }
  }, [id, item]);

  console.log(data);
  console.log(category);

  return (
    <div className="bg-slate-700 w-full h-full">
      <p className="pl-24 pt-6 text-slate-400 font-semibold ">
        {category} &gt; {data && <span>{data.title}</span>}
      </p>
      <div className="w-full flex justify-center items-center p-20 ">
        <div className="bg-white py-10 px-20 rounded-xl mr-10">
          {data && (
            <img className="h-96 min-w-96 object-contain" src={data.image} />
          )}
        </div>
        <div className="h-96 flex flex-col text-slate-400 justify-between ">
          {data && (
            <div className="flex items-center">
              <h3 className="text-2xl font-bold">
                {data.title}
                <span className="bg-green-500 text-white text-base rounded-2xl px-2 py-1 ml-3">
                  NEW
                </span>
              </h3>
            </div>
          )}
          {data && <p className="text-xl">{data.description}</p>}
          <ul className="flex">
            {data && <li className="text-xl">{data.rating.rate}</li>}
            <li className="ml-2 mr-2">/</li>
            {data && <li className="text-xl">{data.rating.count} 참여</li>}
          </ul>
          {data && <p className="text-3xl">${data.price}</p>}
          <div className="flex">
            <button className="bg-violet-600 text-white rounded-lg p-3.5 hover:bg-violet-700">
              장바구니에 담기
            </button>
            <button className="bg-inherit border-slate-400 border text-slate-400 rounded-lg p-3 ml-3.5 hover:bg-slate-400 hover:text-slate-700">
              장바구니로 이동
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
