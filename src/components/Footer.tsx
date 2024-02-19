import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col justify-around items-center h-96 p-3 bg-slate-800 text-slate-300">
      <p>제로베이스</p>
      <ul className="flex justify-between items-center ">
        <li className="m-2">
          <FaCcVisa className="w-10 h-10" />
        </li>
        <li className="m-2">
          <FaCcMastercard className="w-10 h-10" />
        </li>
        <li className="m-2">
          <LiaCcAmex className="w-10 h-10" />
        </li>
        <li className="m-2">
          <FaCcPaypal className="w-10 h-10" />
        </li>
        <li className="m-2">
          <FaCcApplePay className="w-10 h-10" />
        </li>
        <li className="m-2">
          <FaCcDiscover className="w-10 h-10" />
        </li>
      </ul>
      <ul className="flex justify-around w-32">
        <li>
          <FaFacebookF className="w-7 h-7" />
        </li>
        <li>
          <FaInstagram className="w-7 h-7" />
        </li>
        <li>
          <FaGithub className="w-7 h-7" />
        </li>
      </ul>
      <p>Copyright @ 2024 Zero Base</p>
    </div>
  );
}
