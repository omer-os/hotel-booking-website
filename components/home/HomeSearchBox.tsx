"use client";
import React, { useState } from "react";
import HomeDateInput from "../ui/inputs/HomeDateInput";
import HomeGuestsInput from "../ui/inputs/HomeGuestsInput";
import Link from "next/link";

export default function HomeSearchBox() {
  const [CheckIn, setCheckIn] = useState<null | Date>(null);
  const [CheckOut, setCheckOut] = useState<null | Date>(null);

  const [ReservationDetails, setReservationDetails] = useState({
    Adults: 1,
    Children: 0,
    Rooms: 1,
  });

  return (
    <div className="bg-white p-[2.5em] lg:flex-row flex-col flex gap-4 shadow-xl md:max-w-10/12 mx-auto -top-10 z-20 relative transition-all w-full">
      <HomeDateInput label="check in" State={CheckIn} setState={setCheckIn} />
      <HomeDateInput
        label="check out"
        State={CheckOut}
        setState={setCheckOut}
      />
      <HomeGuestsInput
        State={ReservationDetails}
        setState={setReservationDetails}
      />

      <Link
        href={`/hotels?checkIn=${CheckIn?.toISOString()}&checkOut=${CheckOut?.toISOString()}&adults=${
          ReservationDetails.Adults
        }&children=${ReservationDetails.Children}&rooms=${
          ReservationDetails.Rooms
        }`}
        className="rounded-full bg-red-500 text-white py-4 transition-all px-6 capitalize flex-1 items-center active:scale-90 text-center"
      >
        search
      </Link>
    </div>
  );
}
