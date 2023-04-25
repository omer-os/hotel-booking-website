import React from "react";
import SideBarBtn from "./SideBarBtn";
import { auth, currentUser } from "@clerk/nextjs/app-beta";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";

export default async function MainNav() {
  const user: User | null = await currentUser();

  return (
    <header className="sticky bg-base-100 top-0 left-0">
      <nav className="nav items-center md:shadow-none shadow-md p-3 flex justify-between gap-5">
        <Link href="/" className="text-2xl font-bold text-primary">
          DasiyUi
        </Link>
        <input
          type="text"
          className="input md:flex hidden input-bordered max-w-none w-3/6 "
          placeholder="search"
        />
        <SideBarBtn />

        <button className="avatar btn btn-ghost p-0 rounded-full">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.profileImageUrl} />
          </div>
        </button>
      </nav>
    </header>
  );
}
