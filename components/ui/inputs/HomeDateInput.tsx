"use client";

import { BsCalendar2Date } from "react-icons/bs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function HomeDateInput({
  label,
  State,
  setState,
}: {
  label: string;
  State: Date;
  setState: any;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1 relative">
      <DropdownMenu.Root
        open={open}
        onOpenChange={(open) => {
          setTimeout(() => {
            setOpen(open);
          }, 300);
        }}
      >
        <DropdownMenu.Trigger asChild>
          <button className="rounded-full bg-[#F0B679]/20 flex justify-between py-4 active:ring-2 ring-red-500 transition-all px-6 items-center capitalize w-full text-zinc-500">
            {label}
            <BsCalendar2Date />
          </button>
        </DropdownMenu.Trigger>

        <AnimatePresence>
          <DropdownMenu.Content asChild>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white z-40 relative  shadow-xl p-3"
              >
                <DayPicker
                  mode="single"
                  className="bg-base-100 mx-auto p-3 rounded-xl"
                  fromDate={new Date()}
                  onDayClick={(day) => {
                    setState(day);
                    setOpen(false);
                  }}
                  selected={State}
                />

                <DropdownMenu.Arrow className="fill-white " />
              </motion.div>
            )}
          </DropdownMenu.Content>
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  );
}
