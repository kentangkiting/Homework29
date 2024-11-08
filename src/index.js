import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Product from "./Product";
import ListMenu from "./ListMenu";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <span>=============homework29_1============</span>
    <Product />
    <span>=============homework29_2============</span>
    <ListMenu />
    <span>=============homework29_3============</span>
  </StrictMode>
);
