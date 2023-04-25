import { BsCalendar2Date, BsFilter } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

export default function FirstSection() {
  return (
    <div className="flex flex-col ms:mt-10 mt-6">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Overview</div>
        <button className="btn btn-outline gap-2 btn-primary">
          <BsFilter />
          filters
        </button>
      </div>

      <div className="relative">
        <div className="flex p-2 overflow-x-scroll snap-x gap-6 md:mt-2 mt-4">
          <Card
            number={"100$"}
            title="Total Sales"
            profit="up"
            profitAmount={"10%"}
            icon={<BsCalendar2Date size={25} />}
          />
          <Card
            number={"2000$"}
            title="Total Revenue"
            profit="down"
            profitAmount={"20%"}
            icon={<BsCalendar2Date size={25} />}
          />

          <Card
            number={"30"}
            title="checked in guests"
            profit="up"
            profitAmount={"30%"}
            icon={<BsCalendar2Date size={25} />}
          />

          <Card
            number={"4"}
            title="available rooms"
            icon={<BsCalendar2Date size={25} />}
          />
        </div>
        <div className="absolute md:hidden z-10 top-0 right-0 bottom-0 w-6 bg-gradient-to-l from-base-200"></div>
      </div>
    </div>
  );
}

const Card = ({
  icon,
  number,
  title,
  profit,
  profitAmount,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  profit?: "up" | "down";
  profitAmount?: string;
}) => {
  return (
    <div className="flex snap-start flex-1 min-w-[12em] group flex-col bg-base-100 p-4 overflow-hidden rounded-xl shadow relative hover:scale-105 transition-all hover:shadow">
      <div className="w-10 h-10 flex items-center justify-center rounded border">
        {icon}
      </div>

      <div className="z-10">
        <div className="text-2xl font-bold mt-4">{number}</div>
        <div className="text-sm text-zinc-400 capitalize">{title}</div>
      </div>

      {profitAmount && (
        <div
          className={` 
          absolute 
          rounded-full
          w-20 
          h-20 
          flex 
  
          -right-5 
          -bottom-5
  
          group-hover:w-40
          group-hover:h-40
  
          group-hover:-right-1/4
          group-hover:-bottom-1/4
  
  
          items-end
          transition-all
  
          ${profit === "up" ? "bg-success/40" : "bg-error/40"}
          `}
        ></div>
      )}

      {profit && (
        <div className="absolute top-3 right-3">
          <div
            className={`flex gap-1 items-center text-sm ${
              profit === "up" ? "text-success" : "text-error"
            }`}
          >
            {profit !== "up" ? <HiTrendingDown /> : <HiTrendingUp />}
            {profitAmount}
          </div>
        </div>
      )}
    </div>
  );
};
