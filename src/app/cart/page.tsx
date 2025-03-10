"use client";
import useClient from "@/hook/useClient";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import React from "react";
import { storageUrl } from "../utils/Baseurl";
import { useRouter } from "next/navigation";


const CartPage = () => {
  const { updateItemQuantity, items ,removeItem, totalItemsAmount } = useCart();
  const client = useClient();
  const router = useRouter();
  if (!client) {
    return;
  }
  const handleCheckout = ()  => {
    const accesstoken =  window.localStorage.getItem('accessToken');
  
  if(accesstoken){
    router.push('/checkout')
  }
  else{
    window.localStorage.setItem('checkout','true')
    router.push('/login')
  }
}
  
  return (
    <div className="pt-[6.9rem] py-10 min:h-[70vh]">
      <div className="flex flex-col lg:grid lg:grid-cols-6 px-5 md:px-8 lg:px-5 xl:px-10 gap-5 lg:gap-3 xl:gap-5 pt-5">
        <div className="lg:col-span-4">
          <div className="w-full flex overflow-x-auto ">
            <table className=" border-separate xl:border-spacing-y-4 shrink-0 w-full">
              <thead className="bg-slate-100 shrink-0 w-full">
                <tr className="text-center font-semibold w-full">
                  <td className="px-12"></td>
                  <td className="py-4">Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className="">
                {items.map((products, i) => (
                  <tr key={i} className="text-center shrink-0">
                    <td className="relative  w-32 h-10 md:h-36">
                      <Image
                        src={storageUrl + products.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </td>
                    <td>{products.name}</td>
                    <td>{Math.round(products.price)}</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(products, "increase", 1)
                        }
                      >
                        +
                      </button>
                      {products.quantity} 
                       <button
                        onClick={() =>
                          updateItemQuantity(products, "decrease", 1)
                        }
                      >
                         -
                      </button>
                    </td>
                    <td>{Math.round(products.itemTotal!)}</td>
                    <td>
                      <button className="text-blue-400" onClick={() => removeItem(products)}>remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:col-span-2 bg-gray-100 rounded-2xl p-5 md:px-10 h-fit">
          <div className="text-center text-[1rem] md:text-[1.8rem] font-bold pb-5 md:pb-8">
            Cart Total
          </div>
                
         <div className="flex justify-between">
            <div className="text-[1rem] md:text-[1.5rem] lg:text-[1.3rem] md:pb-3">Total</div>
            <div className="text-[1rem] md:text-[1.5rem] lg:text-[1.3rem]">{Math.round(totalItemsAmount)}</div>
         </div>
          <div className="text-center pt-3 md:pt-0 lg:pt-3 xl:pt-0 md:pb-3">
           
              <button
              onClick={handleCheckout}
               className="text-[0.7rem] md:text-[1rem] border-2 px-3 py-2 md:px-8 md:py-3 lg:px-5 xl:px-8 lg:py-2  xl:py-4 rounded-xl">
                Check out
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
