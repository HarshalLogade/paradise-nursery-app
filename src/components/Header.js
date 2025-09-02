import React from "react";
import { useSelector } from "react-redux";

export default function Header({ onCartClick }) {
  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <header className="flex justify-between items-center p-4 bg-green-700 text-white shadow-md">
      <h1 className="text-2xl font-bold">🌱 Paradise Nursery</h1>
      <button
        onClick={onCartClick}
        className="bg-white text-green-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
      >
        🛒 Cart ({itemsCount})
      </button>
    </header>
  );
}
