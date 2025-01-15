"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const checkout = z.object(
    {
        name: z.string().min(3, { message: "Name is required" }),
    }
)

type tcheckout = z.infer<typeof checkout>
const page = () => {
const {register,handleSubmit,reset,formState:{errors,isSubmitting,isSubmitSuccessful},}=useForm<tcheckout>(
    {
        resolver: zodResolver(checkout)
        }
)
const onSubmit = async (data: tcheckout) =>{
    console.log("submit",data);
    reset();
}
  return (
    <div className="pt-[6.9rem] px-10 ">
      <div className="text-[2rem] font-semibold">billing details</div>
      <div className="grid grid-cols-2 gap-5">
        <div className="px-16 py-5">
          <form  onSubmit={handleSubmit(onSubmit)}
           className="">
            <div className="flex flex-row gap-3 ">
              <div className="flex flex-col w-full">
                <h3 className="pb-1">first Name</h3>
                <input className="border border-solid border-black p-1 rounded-xl" type="text" 
                {...register("name", { required: true })}
                placeholder="first name" />
                {errors.name && (
          <p className="text-red-500 text-[0.8rem]">{errors.name.message}</p>
        )}
              </div>
              <div className="flex flex-col w-full">
               <h3 className="pb-1"> last Name</h3>
                <input className="border border-solid border-black p-1 rounded-xl" type="text"
                {...register('name',{required:true})}
                placeholder="last name" />
                {errors.name && (<p className="text-red-500 text-[0.8rem]">{errors.name.message}</p>)}
              </div>
            </div>
            <div className="flex flex-col pt-3">
              <h3 className="pb-1">phone</h3>
              <input className="border border-solid border-black p-1 rounded-xl" type="text" placeholder="phone number" />
            </div>
            <div className="flex flex-col pt-3">
             <h3 className="pb-1"> email</h3>
              <input className="border border-solid border-black p-1 rounded-xl" type="email" placeholder="email" />
            </div>
            <div className="flex flex-col pt-3">
            <h3 className="pb-1">  address</h3>
              <textarea className="border border-solid border-black p-1 rounded-xl" placeholder="address" />
            </div>
            <div className="flex flex-col pt-3">
             <h3 className="pb-1"> pincode</h3>
              <input className="border border-solid border-black p-1 rounded-xl" type="text" placeholder="pincode" />
            </div>
            <div className="flex flex-col pt-3 pb-5">
              <h3 className="pb-1">Country/region</h3>
              <select className="border border-solid border-black p-1 rounded-xl">
                <option>India</option>
                <option>USA</option>
                <option>India</option>
                <option>India</option>
              </select>
            </div>
            <button className="text-center font-semibold bg-violet-500 hover:bg-yellow-300 hover:text-white w-full rounded-3xl p-2">
              Complete order
            </button>
          </form>
        </div>
        <div>
          <div className="flex flex-row justify-between px-16">
            <div className="flex flex-col pt-3 gap-3">
                <div className="text-[2rem]">Product</div>
                <div className="">Shopping</div>
                <div className="">Subtotal</div>
                <div className="">Total</div>
            </div>
            <div className="flex flex-col pt-3 gap-3 items-end">
                <div className="text-[2rem]">SubTotal</div>
                <div className="">100</div>
                <div className="">100</div>
                <div className="">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
