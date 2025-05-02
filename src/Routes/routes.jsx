import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Components/Pages/home.jsx";
import { Menu } from "../Components/Pages/menu.jsx";
import { Services } from "../Components/Pages/services.jsx";
import { About } from "../Components/Pages/about.jsx";
import { Nav } from "./nav.jsx";
export const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
