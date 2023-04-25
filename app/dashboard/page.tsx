import React from "react";

export default function page() {
  return (
    <div className="mt-6">
      <div className="text-2xl font-bold capitalize text-primary/40">
        overview
      </div>
      <div className="flex overflow-x-scroll snap-mandatory snap-x gap-4 mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

// ↓

const Card = () => {
  return (
    <div className="rounded flex flex-col snap-start justify-end bg-base-100 p-4 flex-1 min-w-[11em] h-[12em]">
      <div className="flex flex-col">
        <div className="text-zinc-400 text-sm">Total Orders</div>
        <div className="flex gap-2 items-end">
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-success flex items-end">
            <span className="font-extrabold mr-1">↑</span>
            <p className="text-sm">1,23%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
