import Link from "next/link";
import React from "react";
import ShowDashboardSideBarButton from "../sidebars/dashboardsidebar/ShowDashboardSideBarButton";

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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://media.istockphoto.com/id/1389898082/photo/cute-boy-iconic-character-with-glasses-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=eCYomgIoIaszvUAGrstoB1H3WfA5InMTIc1wYzWtQ3c=" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/admin" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden">
        <ShowDashboardSideBarButton />
      </div>
    </nav>
  );
}
