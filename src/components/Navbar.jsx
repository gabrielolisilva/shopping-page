import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="bg-slate-500 h-20 flex justify-between items-center px-9">
      <Link to="/">
        <h1 className="text-center text-2xl">GabrielShop</h1>
      </Link>

      <div className="flex items-center gap-5">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <AiOutlineShoppingCart size={32} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
