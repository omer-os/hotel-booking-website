import Link from "next/link";
import HotelCardCarousel from "./HotelCardCarousel";

export default function HotelCard({
  hotelName,
  roomPrice,
  roomType,
  roomImages,
  roomAvatar,
  id,
}: {
  hotelName: string;
  roomPrice: string;
  roomType: string;
  roomImages: string[];
  roomAvatar: string;
  id: string;
}) {
  return (
    <div className="rounded-xl text-white flex flex-col  justify-end overflow-hidden group gap-2 p-4 relative">
      <div>
        <HotelCardCarousel images={roomImages} alt={hotelName + " images"} />
      </div>

      <div className="flex relative -bottom-10 group-hover:bottom-0 transition-all gap-2">
        <div className="avatar">
          <div className="bg-red-500 w-12 rounded-full"></div>
        </div>
        <div className="flex z-10 flex-col">
          <div className="text-xl font-bold capitalize">{hotelName}</div>
          <div className="text-sm">{roomPrice} per night</div>
        </div>
      </div>

      <div className="absolute bg-white/60 backdrop-blur-lg text-black py-1 px-2 rounded top-2 right-2 text-xs">
        {roomType}
      </div>

      <Link
        className="z-10 -bottom-20 relative opacity-0 transition-all group-hover:bottom-0 group-hover:opacity-100 py-2 backdrop-blur-xl px-3 rounded bg-red-600/60 text-center active:scale-90"
        href={`/hotels/details/${id}`}
      >
        See Detais
      </Link>
    </div>
  );
}
