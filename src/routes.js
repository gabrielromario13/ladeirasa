import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Products from "./pages/products";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/:category" element={<Products />} />
      <Route path="/:category/:subCategory" element={<Products />} />
    </Routes>
  );
}