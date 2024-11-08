import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Product from "./Product";
import ListMenu from "./ListMenu";
import MouseTracking from "./MouseTracking";
import InputRef from "./InputRef";
import WithLogger from "./WithLogger";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <span>=============homework29_1============</span>
    <Product />
    <span>=============homework29_2============</span>
    <ListMenu />
    <span>=============homework29_3============</span>
    <MouseTracking />
    <span>=============homework29_4============</span>
    <InputRef />
    <span>=============homework29_5============</span>
    <WithLogger />
  </StrictMode>
);
