import React from "react";

export default function LandingPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-5xl font-bold mb-4">🌱 Paradise Nursery</h1>
      <p className="mb-6 text-lg">Your one-stop shop for beautiful plants</p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
      >
        Get Started
      </button>
    </div>
  );
}
