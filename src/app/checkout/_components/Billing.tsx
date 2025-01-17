'use client';
import useClient from '@/hook/useClient';
import { useCart } from '@mrvautin/react-shoppingcart'
import React from 'react'

const Billing = () => {
    const { totalShippingAmount,totalItemsAmount,cartTotal} = useCart();
    const client = useClient();
    if(!client){
        return;
    }
  return (
    <div>
         <div className="flex flex-row justify-between px-5 md:px-12 p-3 pt-0 md:p-5 md:pt-2 bg-slate-100 rounded-2xl">
            <div className="flex flex-col pt-3 gap-4">
                <div className="text-[1.2rem] md:text-[2rem]">Product</div>
                <div className="text-[0.8rem] md:text-[1rem]">Shipping</div>
                <div className="text-[0.8rem] md:text-[1rem] pb-3">Total</div>
                <div className="text-[0.8rem] md:text-[1rem] font-semibold">CartTotal</div>
            </div>
            <div className="flex flex-col pt-3 gap-4 items-end">
                <div className="text-[1.2rem] md:text-[2rem]">CartTotal</div>
                <div className="text-[0.8rem] md:text-[1rem]">{totalShippingAmount}</div>
                <div className="text-[0.8rem] md:text-[1rem] pb-3">{totalItemsAmount}</div>
                <div className="text-[0.8rem] md:text-[1rem] font-semibold">{cartTotal}</div>
            </div>
          </div>
    </div>
  )
}

export default Billing