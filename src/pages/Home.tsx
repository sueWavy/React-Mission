import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="bg-slate-500">Home</div>
    </div>
  );
}
