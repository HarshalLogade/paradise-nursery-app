import React from "react";

export default function PlantCard({ plant, onAdd }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{plant.name}</h3>
      <p className="mb-2">₹{plant.price}</p>
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
