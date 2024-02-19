import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <Slider {...settings} className="mb-3.5 font-[Giants-Inline]">
        <div className="relative">
          <img
            className="w-full max-h-svh object-cover"
            src="https://cdn.pixabay.com/photo/2021/07/23/15/55/jeans-6487623_1280.jpg"
            alt="banner1"
          />
          <div className="absolute w-full bottom-96 left-32  text-white drop-shadow-4xl ">
            <h2 className="text-5xl mb-2">물빠진 청바지!</h2>
            <p className="text-xl">
              이제 막 도착한 패션 청바지를 구경해보세요.
            </p>
            <Link to={"/fashion"}>
              <button className="flex items-center justify-center mt-3 bg-slate-800 py-4 px-4 rounded-md hover:bg-slate-900">
                바로가기 ⮕
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full max-h-svh object-cover"
            src="https://cdn.pixabay.com/photo/2016/02/17/14/24/work-desk-1205159_1280.jpg"
            alt="banner2"
          />
          <div className="absolute w-full bottom-96 left-32  text-white drop-shadow-4xl ">
            <h2 className="text-5xl mb-2">신속한 업무처리!</h2>
            <p className="text-xl">다양한 디지털 상품을 둘러보세요.</p>
            <Link to={"/digital"}>
              <button className="flex items-center justify-center mt-3 bg-slate-800 py-4 px-4 rounded-md hover:bg-slate-900">
                바로가기 ⮕
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full max-h-svh object-cover"
            src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg"
            alt="banner3"
          />
          <div className="absolute w-full bottom-96 left-32  text-white drop-shadow-4xl ">
            <h2 className="text-5xl mb-2">신선한 식품!</h2>
            <p className="text-xl">
              농장 직배송으로 더욱 신선한 식품을 만나보세요.
            </p>
            <Link to={"/food"}>
              <button className="flex items-center justify-center mt-3 bg-slate-800 py-4 px-4 rounded-md hover:bg-slate-900">
                바로가기 ⮕
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    );
  }
}
