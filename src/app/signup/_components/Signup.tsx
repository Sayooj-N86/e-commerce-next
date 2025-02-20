"use client";
import { frontendApi } from "@/api/api";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const signupSchema = z
  .object({
    name: z
      .string()
      .regex(/^[A-Z]/, "*start with capital letter")
      .min(2, "*minimun 2 letters required"),
    email: z.string().email("*Invalid email").endsWith("com"),
    password: z
      .string()
      .regex(
        /^(?=.*(^[A-Z]))(?=.*[0-9])/,
        "*start with capital letter and atleast one number"
      )
      .min(8, "*Password required and atleast 8 characters")
      .max(10, "password contains only 10 character"),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["password1"],
  });
type TsignupSchema = z.infer<typeof signupSchema>;
const Signup = () => {
  const [touch, setTouch] = useState(false);
  // const [touch1, setTouch1] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, },
  } = useForm<TsignupSchema>({
    resolver: zodResolver(signupSchema),
  });
  const router = useRouter();
  const onSubmit = async (data: TsignupSchema) => {
    try
    {
      const response = await frontendApi.signupApi(data);
      console.log(response);
      if(response.data.success){
        toast.success("Sign Up successfully");
        router.push("/login");
        router.refresh();
      }
      }
      catch(error)
      {
        console.log(error);
        toast.error("try again");
    }
    console.log("submited", data);

    reset();
    setTouch(false);
    // setTouch1(false);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col justify-center bg-white p-9 md:p-11 gap-1 md:gap-2 rounded-2xl"
      >
        <h1 className="font-bold text-[1.1rem] md:text-[1.8rem] text-blue-600">
          Create your Account
        </h1>
        <h2 className="text-black/50 text-center text-[0.7rem] md:text-[1rem] pb-4">
          please enter your details!!
        </h2>
        <input
          className="border border-gray-300 md:border-gray-400 text-[0.7rem] md:text-[1rem] p-1 md:p-2 rounded-xl md:rounded-2xl w-full"
          type="text"
          {...register("name", { required: true })}
          placeholder="name"
        />
        {errors.name && (
          <p className="text-red-500 text-[0.8rem]">{errors.name.message}</p>
        )}
        <input
          className="border border-gray-300 md:border-gray-400 text-[0.7rem] md:text-[1rem] p-1 md:p-2 rounded-xl md:rounded-2xl w-full"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-[0.8rem]">{errors.email?.message}</p>
        )}

        <div className="relative w-full">
          <input
            className="border border-gray-300 md:border-gray-400 text-[0.7rem] md:text-[1rem] p-1 md:p-2 rounded-xl md:rounded-2xl w-full"
            type={touch ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-[0.8rem]">
              {errors.password?.message}
            </p>
          )}
          {touch ? (
            <Openeye
              className="absolute h-3 w-3 md:h-4 md:w-4 top-2 md:top-3 right-3"
              onClick={() => setTouch(!touch)}
            />
          ) : (
            <Closeeye
              className="absolute h-3 w-3 md:h-4 md:w-4 top-2 md:top-3 right-3"
              onClick={() => setTouch(!touch)}
            />
          )}
        </div>
        <div className="relative w-full">
          <input
            className="border border-gray-300 md:border-gray-400 text-[0.7rem] md:text-[1rem] p-1 md:p-2 rounded-xl md:rounded-2xl w-full"
            type="password"
            {...register("confirmpassword")}
            placeholder="Confirm password"
          />
        </div>
        <div className="pt-3 md:pt-4 w-full">
          <button
            disabled={isSubmitting}
            className="bg-yellow-300 hover:bg-blue-700 hover:text-white text-black font-semibold md:font-bold py-1 md:py-2 w-full rounded-2xl text-[0.7rem] md:text-[1rem]"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
