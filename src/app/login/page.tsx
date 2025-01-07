"use client";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [touch, setTouch] = useState(false);
  return (
    <div className="pt-[6.1rem]">
      <div className="relative h-[43rem]  flex justify-center items-center ">
        <Image
          src="/image/login.jpg"
          alt="login"
          fill
          className="object-cover"
        />
        <form className="relative flex flex-col justify-center items-center bg-white p-12 gap-2 rounded-2xl">
          <h1 className="font-bold text-[2rem] text-blue-600 pb-2">
            log in to your account
          </h1>
          <h2 className="text-black/50">please enter your details!!</h2>
          <input
            className="border border-gray-500 p-2 rounded-2xl w-full"
            type="email"
            placeholder="Email"
          />
          <div className="relative w-full">
            <input
              className="border border-gray-500 p-2 rounded-2xl w-full"
              type={touch ? "text" : "password"}
              placeholder="Password"
            />

            {touch ? (
              <Openeye className="absolute h-5 w-5 top-3 right-3" onClick={() => setTouch(!touch)}/>
            ) : (
              <Closeeye
                className="absolute h-5 w-5 top-3 right-3"
                onClick={() => setTouch(!touch)}
              />
            )}
          </div>
          <div className="pt-4 w-full">
            <button
              className="bg-yellow-300 hover:bg-blue-700 text-black font-bold py-2 w-full rounded-2xl"
              type="submit"
            >
              Log in
            </button>
          </div>
          <div className="flex flex-row items-center pt-4 gap-1">
            <h2 className="font-semibold">Don't have an Account?</h2>
            <button className=" text-violet-700 hover:blue-700 font-bold">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
