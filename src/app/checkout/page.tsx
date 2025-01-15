"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const checkout = z.object(
    {
        name: z.string().regex(/^[A-Z]/, "*start with capital letter").min(2, "*minimun 2 letters required"),
        name1: z.string().regex(/^[A-Z]/, "*start with capital letter").min(2, "*minimun 2 letters required"),
        email: z.string().email("*Invalid email").endsWith("com"),
        phone: z.string().regex(/(^[6-9]\d{9}$)/,"*10 numbers required").length(10, { message: "*Phone number is required" }),
        address: z.string().min(15, { message: "*Address is required" }),
        pincode: z.string().regex(/^\d{6}$/,"*pincode required"),
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
    <div className="pt-[6.1rem] lg:px-5 xl:px-16 ">
      <div className="grid lg:grid-cols-2 gap-5 pt-5 px-4 md:px-24 lg:px-0">
        <div className="xl:px-16 py-5">
      <div className="text-[1.5rem] md:text-[2rem] font-semibold">Billing details</div>
          <form  onSubmit={handleSubmit(onSubmit)}
           className="pt-7 px-6">
            <div className="md:flex md:flex-row gap-3 ">
              <div className="flex flex-col w-full ">
                <h3 className="pb-1">First Name</h3>
                <input className="border border-solid border-black p-1 rounded-xl" type="text" 
                {...register("name1", { required: true })}
                placeholder="first name" />
                {errors.name1 && (
          <p className="text-red-500 text-[0.8rem]">{errors.name1.message}</p>
        )}
              </div>
              <div className="flex flex-col w-full pt-3 md:pt-0">
               <h3 className="pb-1">Last Name</h3>
                <input className="border border-solid border-black p-1 rounded-xl" type="text"
                {...register('name',{required:true})}
                placeholder="last name" />
                {errors.name && (<p className="text-red-500 text-[0.8rem]">{errors.name.message}</p>)}
              </div>
            </div>
            <div className="flex flex-col pt-3">
              <h3 className="pb-1">Phone</h3>
              <input className="border border-solid border-black p-1 rounded-xl" type="text"
              {...register('phone',{required:true})}
              placeholder="phone number" />
              {errors.phone && (<p className="text-red-500 text-[0.8rem]">{errors.phone.message}</p>)}
            </div>
            <div className="flex flex-col pt-3">
             <h3 className="pb-1">Email</h3>
              <input className="border border-solid border-black p-1 rounded-xl" type="email"
              {...register('email',{required:true})}
              placeholder="email" />
              {errors.email && (<p className="text-red-500 text-[0.8rem]">{errors.email.message}</p>)}
            </div>
            <div className="flex flex-col pt-3">
            <h3 className="pb-1">Address</h3>
              <textarea className="border border-solid border-black p-1 rounded-xl"
              {...register('address',{required:true})}
              placeholder="address" />
              {errors.address && (<p className="text-red-500 text-[0.8rem]">{errors.address.message}</p>)}
            </div>
            <div className="flex flex-col pt-3">
             <h3 className="pb-1">Pincode</h3>
              <input className="border border-solid border-black p-1 rounded-xl" type="text"
              {...register('pincode',{required:true})}
              placeholder="pincode" />
              {errors.pincode && (<p className="text-red-500 text-[0.8rem]">{errors.pincode.message}</p>)}
            </div>
            <div className="flex flex-col pt-3 pb-5">
              <h3 className="pb-1">Country/Region</h3>
              <select className="border border-solid border-black p-1 rounded-xl">select an option
                <option>India</option>
                <option>USA</option>
                <option>Brazil</option>
                <option>Canada</option>
                <option>UAE</option>
              </select>
            </div>
            <button className="text-center text-white font-semibold bg-violet-600 hover:bg-yellow-300 hover:text-black w-full rounded-2xl p-2">
              Complete Order
            </button>
          </form>
        </div>
        <div className="pb-10 md:pt-10 px-3">
          <div className="flex flex-row justify-between px-5 md:px-12 p-3 pt-0 md:p-5 md:pt-2 bg-slate-100 rounded-2xl">
            <div className="flex flex-col pt-3 gap-3">
                <div className="text-[1.2rem] md:text-[2rem]">Product</div>
                <div className="text-[0.8rem] md:text-[1rem]">Shopping</div>
                <div className="text-[0.8rem] md:text-[1rem]">Subtotal</div>
                <div className="text-[0.8rem] md:text-[1rem]">Total</div>
            </div>
            <div className="flex flex-col pt-3 gap-3 items-end">
                <div className="text-[1.2rem] md:text-[2rem]">SubTotal</div>
                <div className="text-[0.8rem] md:text-[1rem]">100</div>
                <div className="text-[0.8rem] md:text-[1rem]">100</div>
                <div className="text-[0.8rem] md:text-[1rem]">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
