import HomeSearchBox from "components/components/home/HomeSearchBox";
import HomeSec2 from "components/components/home/HomeSec2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="h-screen w-full bg-zinc-400 absolute top-0 left-0 flex items-center justify-center">
        <div>
          <Image
            src="/images/hero.jpg"
            priority
            fill
            alt="hero image"
            className="object-cover pointer-events-none"
          />
        </div>

        <div className="flex line flex-col gap-3 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-bold capitalize text-white sm:w-4/6 px-5 text-center mx-auto">
            Experience comfort and luxury at its finest with Hotell - your
            perfect getaway destination
          </h1>
          <Link
            href="#searchbox"
            className="py-3 active:scale-90 transition-all text-white w-max sm:mt-3 mt-4 mx-auto px-5 sm:rounded-full rounded-lg bg-red-600 active:bg-red-500 md:text-md text-sm selection:none"
          >
            Search Now
          </Link>
        </div>
      </div>
      <div className="h-[90vh]" />
      <HomeSearchBox />

      {/* <HomeSec2 /> */}
    </div>
  );
}
