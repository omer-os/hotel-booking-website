import HotelCard from "components/components/hotels/card/HotelCard";
import React from "react";

const rooms = [
  {
    id: "koriyb30riubribperpih",
    name: "single room",
    price: "200IQD",
    description: "this is a single room",
    images: [
      "https://baghdadhoteliq.net/hotelimages/218103623.jpg",
      "https://baghdadhoteliq.net/hotelimages/R/2.png",
    ],
  },
  {
    id: "koriyb30riubribperpih",
    name: "single room",
    price: "200IQD",
    description: "this is a single room",
    images: [
      "https://baghdadhoteliq.net/hotelimages/218054763.jpg",
      "https://baghdadhoteliq.net/hotelimages/218103623.jpg",
    ],
  },
  {
    id: "koriyb30riubribperpih",
    name: "single room",
    price: "200IQD",
    description: "this is a single room",
    images: [
      "https://baghdadhoteliq.net/hotelimages/218075397.jpg",
      "https://baghdadhoteliq.net/hotelimages/218103623.jpg",
    ],
  },
];

export default function page() {
  return (
    <div className="mt-12">
      <div className="text-3xl font-bold">Best Deals for You</div>

      <div
        className="grid auto-rows-[20em] gap-4 mt-4
        lg:grid-cols-4 
        sm:grid-cols-2
        grid-cols-1"
      >
        {rooms.map((room, index) => (
          <HotelCard
            key={index}
            hotelName="Hotel Name"
            roomPrice={room.price}
            roomType={room.name}
            roomImages={room.images}
            roomAvatar="https://baghdadhoteliq.net/hotelimages/218103623.jpg"
            id={room.id}
          />
        ))}
      </div>
    </div>
  );
}
