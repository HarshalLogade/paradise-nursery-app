import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {started ? <ShopPage /> : <LandingPage onStart={() => setStarted(true)} />}
    </div>
  );
}

export default App;
