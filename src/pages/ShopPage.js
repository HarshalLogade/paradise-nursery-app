import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import PlantCard from "../components/PlantCard";
import Header from "../components/Header";
import CartModal from "../components/CartModal";
import plants from "../data/plants";

export default function ShopPage() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header onCartClick={() => setShowCart(true)} />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onAdd={() => dispatch(addItem(plant))}
          />
        ))}
      </div>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </div>
  );
}
