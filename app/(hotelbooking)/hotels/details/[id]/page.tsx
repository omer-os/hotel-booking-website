import HotelCardCarousel from "components/components/hotels/card/HotelCardCarousel";
import BookRoomCard from "components/components/hotels/hoteldetails/BookRoomCard";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full md:h-[52vh] h-[50vh]">
        <div className="absolute w-full top-0 left-0 h-20 bg-white/60 backdrop-blur-md" />
        <div>
          <img
            src="https://baghdadhoteliq.net/hotelimages/218054763.jpg"
            alt=""
            className="-z-10 w-full h-full object-cover absolute top-0 left-0 brightness-50"
          />
        </div>
      </div>

      <div className="flex flex-col md:mt-44 mt-52 relative z-10">
        <div className="md:text-5xl text-4xl font-bold text-white">
          Room Details
        </div>
        <div className="md:text-lg breadcrumbs text-white">
          <ul>
            <li>
              <Link
                className="hover:text-red-400 transition-all duration-300"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-400 transition-all duration-300"
                href="/"
              >
                hotels
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-400 transition-all duration-300"
                href="/hotels/details/koriyb30riubribperpih"
              >
                99Hotel
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:h-[6em] h-[4em]" />

      <div className="flex lg:flex-row flex-col gap-10">
        <div className="flex flex-col">
          <div className="relative overflow-hidden rounded-xl group w-full h-[25em]">
            <HotelCardCarousel
              alt="room images"
              images={[
                "https://baghdadhoteliq.net/hotelimages/218054763.jpg",
                "https://baghdadhoteliq.net/hotelimages/218059027.jpg",
              ]}
            />
          </div>

          <div className="text-3xl font-bold mt-6">SMALL SUITE</div>

          <div className="text-zinc-400 mt-10">
            This air-conditioned room features carpeted floors and offers a
            small seating area with a flat-screen TV and a mini. This
            air-conditioned suite decorated in soft colors includes a separate
            living room with a dining area and a flat-screen TV, and the
            bathroom includes a bath and shower.
          </div>

          <div className="text-2xl font-bold mt-14">
            AVAILABLE IN YOUR OWN BATHROOM
          </div>

          <div className="text-zinc-400 mt-3 text-xl">
            Bath - Toilet - Shower - Towels
          </div>

          <div className="text-2xl font-bold mt-14">ROOM FACILITIES</div>

          <div className="text-zinc-400 mt-3">
            Mini bar - seating area - sofa - safety deposit box - Air
            conditioning - telephone - safety deposit box - flat screen TV -
            carpeted floor - dining area
          </div>
        </div>

        <BookRoomCard />
      </div>
    </div>
  );
}
