"use client";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";

const bookedDates = [
  new Date(5, 5, 2023),
  new Date(2023, 3, 31),
  new Date(2023, 4, 30),
];
const bookedStyle = { border: "2px solid currentColor" };

export default function SecondSection() {
  const [SelectedDate, setSelectedDate] = useState<null | Date>(null);
  const handleDayClick: any = (
    day: Date,
    modifiers: {
      booked: boolean;
    }
  ) => {
    if (modifiers.booked) {
      setSelectedDate(day);
    }
  };

  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between flex-1">
        <div className="text-2xl font-bold">Reservations Dates</div>
        {/* <button className="btn btn-outline gap-2 btn-primary">
          <BsFilter />
          filters
        </button> */}
      </div>

      <div className="mt-4 flex md:flex-row flex-col gap-5">
        <DayPicker
          mode="multiple"
          className="bg-base-100 mx-auto p-3 rounded-xl"
          modifiers={{
            booked: bookedDates,
          }}
          modifiersStyles={{
            booked: bookedStyle,
          }}
          onDayClick={handleDayClick}
          fromDate={new Date()}
        />

        <div className="flex flex-col flex-1">
          {SelectedDate && (
            <div className="text-2xl font-bold bg-base-100 p-3 rounded-xl">
              {`${SelectedDate}`} Details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
