import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";

export default function CartModal({ onClose }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
        {cart.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="mb-4">
            {cart.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  {item.name} (x{item.qty})
                </span>
                <div>
                  <span className="mr-2">₹{item.price * item.qty}</span>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className="font-bold mb-4">Total: ₹{cart.total}</p>
        <div className="flex justify-between">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
