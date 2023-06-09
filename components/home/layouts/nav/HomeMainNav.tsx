"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephoneFill } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUser, useAuth } from "@clerk/nextjs";

const urls = [
  { name: "home", url: "/" },
  { name: "services", url: "/services" },
  { name: "contact", url: "/contact" },
  { name: "signin", url: "/signin" },
];

export default function HomeMainNav() {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(0);
  const [OpenSideBar, setOpenSideBar] = useState(false);
  const user = useUser();
  const { signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar sticky bg-transparent shadow-none transition-all top-0 left-0 z-50 ${
        scroll > 0.1 ? "bg-white !shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl items-center md:py-3 transition-all md:px-6 px-5 relative z-50 mx-auto w-full">
        <div className="text-xl font-bold md:flex-none flex-1">Hotell</div>

        <div className="md:flex justify-center ml-[6em] flex-1 hidden capitalize gap-3">
          {urls.map((url) => (
            <Link
              key={url.name}
              className={`hover:text-black text-zinc-600 ${
                pathname === url.url ? "text-black font-bold" : ""
              }`}
              href={url.url}
            >
              {url.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="md:flex hidden items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center border border-black rounded-full">
              <BsTelephoneFill />
            </div>
            123-489-9381
          </div>

          <div>
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.user?.profileImageUrl} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/admin" className="justify-between">
                      See Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/dashboard">Your Dashboard</Link>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        signOut();
                        window.location.href = "/";
                      }}
                    >
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setOpenSideBar(!OpenSideBar)}
          className="hover:bg-zinc-200/50 transition-all flex items-center justify-center h-10 w-10 rounded -mr-2
          

          active:scale-90
          md:hidden
          "
        >
          {!OpenSideBar ? (
            <RiMenu3Line className="text-2xl" />
          ) : (
            <IoCloseOutline className="text-2xl" />
          )}
        </button>
      </nav>

      <div
        className={`fixed bg-white h-full top-0 -left-full w-full transition-all p-6 flex flex-col pt-24 ${
          OpenSideBar ? "left-0" : ""
        }`}
      >
        {urls.map((url) => (
          <Link
            href={url.url}
            key={url.name}
            className={`hover:text-black hover:bg-zinc-200 p-3 rounded-xl w-full text-zinc-600 ${
              pathname === url.url ? "text-black font-bold bg-zinc-200" : ""
            }`}
            onClick={() => setOpenSideBar(false)}
          >
            {url.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
