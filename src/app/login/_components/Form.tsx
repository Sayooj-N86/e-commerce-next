"use client";
import { frontendApi } from "@/api/api";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import Cookies from "js-cookie";


const loginSchema = z.object({
    email: z.string().email("*Invalid email").endsWith("com"),
    password: z.string().regex(/^[A-Z]/,"*start with capital letter").min(8,"*Password required and atleast 8 characters").max(10,"*password contains only 10 character"),
})
type TloginSchema = z.infer<typeof loginSchema>;
const Form = () => {
  const [touch, setTouch] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors,isSubmitting },
  } = useForm<TloginSchema>({
    resolver: zodResolver(loginSchema),
  })
  const router = useRouter();
  const onSubmit = async (data : TloginSchema) => {
    try{
      const response = await frontendApi.loginApi(data);
      console.log(response);
      if(response.data.success){
        window.localStorage.setItem('accessToken',response.data.accessToken);
        window.localStorage.setItem('userdata',JSON.stringify(response.data.userData));
        Cookies.set('accessToken',response.data.accessToken);
        toast.success("login successfully");

        const checkout = window.localStorage.getItem('checkout');
        if(checkout){
          window.localStorage.removeItem('checkout')
          router.push('/checkout');
          }else{
        router.push("/");
        }
        // router.refresh();
      }
    }
    catch(error){
      console.log(error);
        toast.error("try again");
    }
    // console.log("submited",data)
    reset()
  };
  return (
    <div>
      <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="relative flex flex-col justify-center bg-white p-9 md:p-11 gap-1 md:gap-2 rounded-2xl">
        <h1 className="font-bold text-[1.1rem] md:text-[1.8rem] text-blue-600">
          log in to your account
        </h1>
        <h2 className="text-black/50 text-center text-[0.7rem] md:text-[1rem] pb-4">
          please enter your details!!
        </h2>
        <input
          className="border border-gray-300 md:border-gray-400 text-[0.7rem] md:text-[1rem] p-1 md:p-2 rounded-xl md:rounded-2xl w-full"
          type="email"
          {...register('email',{required:true})}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-[0.8rem]">{errors.email?.message}</p>}
        
        <div className="relative w-full">
          <input
            className="border border-gray-300 md:border-gray-400 text-[0.7rem] md:text-[1rem] p-1 md:p-2 rounded-xl md:rounded-2xl w-full"
            type={touch ? "text" : "password"}
            {...register('password')}
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500 text-[0.8rem]">{errors.password?.message}</p>}
          {touch ? (
            <Openeye
              className="absolute h-3 w-3 md:h-5 md:w-5 top-2 md:top-3 right-3"
              onClick={() => setTouch(!touch)}
            />
          ) : (
            <Closeeye
              className="absolute h-3 w-3 md:h-5 md:w-5 top-2 md:top-3 right-3"
              onClick={() => setTouch(!touch)}
            />
          )}
        </div>
        <div className="pt-3 md:pt-4 w-full">
          <button
          disabled={isSubmitting}
            className="bg-yellow-300 hover:bg-blue-700 hover:text-white text-black font-semibold md:font-bold py-1 md:py-2 w-full rounded-2xl text-[0.7rem] md:text-[1rem]"
            type="submit"
          >
            Log in
          </button>
        </div>
        <div className="flex flex-row items-center pt-4 gap-1">
          <h2 className="md:font-semibold text-[0.8rem] md:text-[1rem]">
            Dont have an Account?
          </h2>
          <Link
            href="/signup"
            className="text-violet-700 hover:blue-700 font-semibold md:font-bold text-[0.8rem] md:text-[1rem]"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
