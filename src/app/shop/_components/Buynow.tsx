"use client";
// import { storageUrl } from "@/app/utils/Baseurl";
import useClient from "@/hook/useClient";
import { useCart } from "@mrvautin/react-shoppingcart";

import React from "react";

type Props = {
  productdy: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
};

const Buynow = ({ productdy }: Props) => {
  const { addItem, items, addShipping } = useCart();
  console.log("items:::", items);
  console.log(",,,,",productdy);
  const client = useClient();
  if(!client)
{
  return;
}
  const products = {
    id: productdy._id,
    image: productdy.image,
    name: productdy.name,
    price: productdy.price,
  }
  return (
    <div> 
      <div>
        <button
          className="bg-blue-500 text-white rounded-2xl p-3"
          onClick={() => {
            addItem(products);
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
