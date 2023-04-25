import React from "react";
import SideBarBtn from "./SideBarBtn";

export default function MainNav() {
  return (
    <header className="sticky bg-base-100 top-0 left-0">
      <nav className="nav p-3 flex gap-5">
        <input
          type="text"
          className="input input-bordered max-w-none md:w-3/6 flex-1 md:flex-none"
          placeholder="search"
        />
        <SideBarBtn />
      </nav>
    </header>
  );
}
