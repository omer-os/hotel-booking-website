"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function HomeGuestsInput({
  State,
  setState,
}: {
  State: {
    Adults: number;
    Children: number;
    Rooms: number;
  };
  setState: any;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1 relative ">
      <DropdownMenu.Root
        open={open}
        onOpenChange={(open) => {
          setTimeout(() => {
            setOpen(open);
          }, 300);
        }}
      >
        <DropdownMenu.Trigger asChild>
          <button className="rounded-full bg-[#F0B679]/20 flex justify-between py-4 active:ring-2 ring-red-500 transition-all px-6 w-full items-center text-zinc-500">
            {State.Adults + State.Children > 0 && (
              <div className="text-lg">
                {State.Adults + State.Children} Guest
                {State.Adults + State.Children > 1 ? "s" : ""} / {State.Rooms}{" "}
                Room{State.Rooms > 1 ? "s" : ""}
              </div>
            )}
            <BsFillPersonFill />
          </button>
        </DropdownMenu.Trigger>

        <AnimatePresence>
          <DropdownMenu.Content asChild>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white shadow-xl p-4 rounded"
              >
                <DropdownMenu.Arrow className="fill-white " />

                <div className="text-xl font-bold border-b pb-2 mb-2">
                  {State.Adults + State.Children} Guests
                </div>
                <div className="flex flex-col gap-3 py-3">
                  {[
                    {
                      name: "Adults",
                      value: State.Adults,
                    },
                    {
                      name: "Children",
                      value: State.Children,
                    },
                    {
                      name: "Rooms",
                      value: State.Rooms,
                    },
                  ].map((i, index) => (
                    <div
                      key={index}
                      className="flex gap-12 items-center justify-between"
                    >
                      <div className="text-lg">{i.name}</div>
                      <div className="flex items-center">
                        <button
                          className="rounded-full bg-[#F0B679]/20 flex justify-center py-2 active:ring-2 ring-red-500 transition-all px-4 capitalize w-8 h-8 items-center text-zinc-500"
                          onClick={() => {
                            if (i.value > 0) {
                              if (i.name === "Rooms" || i.name === "Adults") {
                                if (i.value > 1) {
                                  setState((prev: any) => {
                                    return {
                                      ...prev,
                                      [i.name]: prev[i.name] - 1,
                                    };
                                  });
                                }
                              } else {
                                setState((prev: any) => {
                                  return {
                                    ...prev,
                                    [i.name]: prev[i.name] - 1,
                                  };
                                });
                              }
                            }
                          }}
                        >
                          -
                        </button>
                        <div className="mx-4">{i.value}</div>
                        <button
                          className="rounded-full bg-[#F0B679]/20 flex justify-center py-2 active:ring-2 ring-red-500 transition-all px-4 capitalize w-8 h-8 items-center text-zinc-500"
                          onClick={() => {
                            setState((prev: any) => {
                              return { ...prev, [i.name]: prev[i.name] + 1 };
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </DropdownMenu.Content>
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  );
}
