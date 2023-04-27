"use client";

export default function BookRoomCard() {
  return (
    <div className="md:min-w-[30em] h-max border md:p-10 p-6">
      <div className="text-xl">Book the room</div>

      <div className="flex gap-5 mt-5 flex-col">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered"
        />

        <input
          type="text"
          placeholder="Email"
          className="input input-bordered"
        />

        <button className="btn">Book Now</button>
      </div>
    </div>
  );
}
