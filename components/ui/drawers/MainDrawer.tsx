"use client";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoIosPaper, IoMdNotifications } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GlobalContext } from "components/components/lib/contexts/GlobalContext";
import { HiOutlineMenu } from "react-icons/hi";

const listItems = [
  {
    name: "home",
    link: "/",
    icon: <AiFillHome />,
  },
  {
    name: "Guests",
    link: "/Guests",
    icon: <FaUserFriends />,
  },
  {
    name: "reservations",
    link: "/reservations",
    icon: <IoIosPaper />,
  },
  {
    name: "inbox",
    link: "/inbox",
    icon: <IoMdNotifications />,
  },
];

export default function MainDrawer() {
  const pathname = usePathname();
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  return (
    <div
      data-open={sideBarOpen}
      className="
    
    data-[open=true]:left-0
    data-[open=false]:-left-full
    transition-all

    z-50
    overflow-hidden md:w-[16em] w-full md:relative fixed top-0 md:!left-0 h-full bg-base-100 p-5 right-b"
    >
      <div className="flex justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          DasiyUi
        </Link>
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="btn-ghost btn md:hidden"
        >
          {sideBarOpen ? (
            <IoCloseSharp size={25} />
          ) : (
            <HiOutlineMenu size={25} />
          )}{" "}
        </button>
      </div>

      <div className="menu pt-5">
        {listItems.map((item, index) => (
          <li
            key={index}
            className={`transition-all ${
              pathname === `${item.link}` ? "bordered" : ""
            }`}
            onClick={() => setSideBarOpen(false)}
          >
            <Link href={item.link}>
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
