import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import ShopPage from "@/pages/shop";
import CartPage from "@/pages/cart";

const Navigator = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default Navigator;
