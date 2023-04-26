import HomeSearchBox from "components/components/home/HomeSearchBox";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="h-screen w-full bg-zinc-400 absolute top-0 left-0 flex items-center justify-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1563546689767-df69761117a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none "
            alt="hero image"
          />
        </div>

        <div className="flex line flex-col gap-3 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold capitalize text-white sm:w-4/6 px-6 sm:text-center mx-auto text-left">
            Once a year go someplace you've never been before.
          </h1>
          <button className="py-3 active:scale-90 transition-all text-white w-max sm:mt-3 mt-4 sm:mx-auto mx-6 px-5 sm:rounded-full rounded-lg bg-red-600 active:bg-red-500 selection:none">
            Search Now
          </button>
        </div>
      </div>

      <HomeSearchBox />
    </div>
  );
}
