import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddtoCart() {

  const [items, setItems] = useState(0);

  function handelCart() {
    setItems((prev) => {
      const upadedItems = items + 1;
      toast(`${upadedItems} item added to cart`);
      return upadedItems;
    });
  }
  
  return (
    <div className="Main">
      <h2>Add to cart</h2>
      <div className="modal">
        <button onClick={handelCart}><b>Add to cart</b></button>
        <Toaster />
      </div>
    </div>
  );
}
