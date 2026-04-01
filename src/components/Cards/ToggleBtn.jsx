import { useState } from "react";

const ToggleButtons = () => {
  const [active, setActive] = useState("product");

  return (
    <div className="flex gap-2 items-center justify-center text-center mb-16 mt-7">
      
      <button
        onClick={() => setActive("product")}
        className={`btn rounded-full ${
          active === "product" ? "btn-primary" : "btn-outline"
        }`}
      >
        Product
      </button>

      <button
        onClick={() => setActive("cart")}
        className={`btn rounded-full ${
          active === "cart" ? "btn-primary" : "btn-outline"
        }`}
      >
        Cart
      </button>

    </div>
  );
};

export default ToggleButtons;