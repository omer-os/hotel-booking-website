"use client";

import { DashboardSideBarContext } from "components/components/dashboard/DashboardWrapper";
import { useContext } from "react";
import ShowDashboardSideBarButton from "./ShowDashboardSideBarButton";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoIosPaper, IoMdNotifications } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "overview",
    link: "/admin/dashboard",
    icon: <AiFillHome />,
  },
  {
    name: "Guests",
    link: "/admin/dashboard/Guests",
    icon: <FaUserFriends />,
  },
  {
    name: "reservations",
    link: "/admin/dashboard/reservations",
    icon: <IoIosPaper />,
  },
  {
    name: "inbox",
    link: "/admin/dashboard/inbox",
    icon: <IoMdNotifications />,
  },
];

export default function DashboardSideBar() {
  const { open, setOpen } = useContext(DashboardSideBarContext);
  const pathname = usePathname();

  return (
    <div
      className={`h-full md:!w-[15em] md:static fixed z-50 w-full row-span-2 bg-base-100 border-r transition-all 
    ${open ? "!left-0" : "-left-full"}`}
    >
      <nav className="navbar flex justify-between sticky top-0 left-0 bg-base-100 shadow-sm px-4">
        <div className="text-xl font-bold">Logo</div>
        <div className="md:hidden">
          <ShowDashboardSideBarButton />
        </div>
      </nav>

      <ul className="menu p-4 bg-base-100">
        {links.map((link) => (
          <li key={link.link}>
            <Link
              className={`${pathname === link.link && "active"}`}
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
