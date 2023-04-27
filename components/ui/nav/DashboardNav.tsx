import Link from "next/link";
import React from "react";
import ShowDashboardSideBarButton from "../sidebars/dashboardsidebar/ShowDashboardSideBarButton";
import NavUserDropDown from "./NavUserDropDown";

export default function DashboardNav() {
  return (
    <nav className="navbar sticky top-0 left-0 bg-base-100 shadow-sm h-max">
      <div className="flex-1">
        <Link
          href="/admin/dashboard"
          className="btn btn-ghost normal-case text-xl"
        >
          Dashboard
        </Link>
      </div>

      <div className="flex-none md:flex hidden gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>

        <NavUserDropDown />

      </div>

      <div className="md:hidden">
        <ShowDashboardSideBarButton />
      </div>
    </nav>
  );
}
