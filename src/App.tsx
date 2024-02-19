import "./App.css";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShopDataAtom } from "./recoil/ShopDataAtom";

function App() {
  const [state, setState] = useRecoilState(ShopDataAtom);

  const getData = async (): Promise<void> => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setState(res.data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    console.log(state);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
