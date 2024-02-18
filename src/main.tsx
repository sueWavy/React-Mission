import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Fashion from "./pages/Fashion.js";
import Accessory from "./pages/Accessory.js";
import Digital from "./pages/Digital.js";
import Cart from "./pages/Cart.js";
import NotFound from "./pages/NotFound.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/fashion",
        element: <Fashion />,
      },
      {
        path: "/accessory",
        element: <Accessory />,
      },
      {
        path: "/digital",
        element: <Digital />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
