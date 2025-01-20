"use client";
import { useCart } from "@mrvautin/react-shoppingcart";
import React from "react";

type Props = {
  productdy: {
    id: string;
    title: string;
    price: number;
    images: string;
  };
};

const Buynow = ({ productdy }: Props) => {
  const { addItem, items, addShipping } = useCart();
  console.log(":::", items);
  return (
    <div> 
      <div>
        <button
          className="bg-blue-500 text-white rounded-2xl p-3"
          onClick={() => {
            addItem(productdy);
            addShipping({description:"shipping charge",cost:15})
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Buynow;
