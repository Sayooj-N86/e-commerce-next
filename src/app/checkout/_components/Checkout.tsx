"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const Checkout = () => {
    const checkout = z.object(
        {
            name: z.string().regex(/^[A-Z]/, "*start with capital letter").min(2, "*minimun 2 letters required"),
            name1: z.string().regex(/^[A-Z]/, "*start with capital letter").min(2, "*minimun 2 letters required"),
            email: z.string().email("*Invalid email").endsWith("com"),
            phone: z.string().regex(/(^[6-9]\d{9}$)/,"*10 numbers required"),
            address: z.string().min(15, { message: "*Address is required" }),
            pincode: z.string().regex(/^\d{6}$/,"*pincode required"),
        }
    )
    
    type tcheckout = z.infer<typeof checkout>
    
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
    <div>
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
            <button className="text-center text-white font-semibold bg-violet-600 hover:bg-yellow-300 hover:text-black w-full rounded-3xl p-2">
              Complete Order
            </button>
          </form>
    </div>
  )
}

export default Checkout