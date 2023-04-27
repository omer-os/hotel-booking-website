"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function NavUserDropDown() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.profileImageUrl} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/admin" className="justify-between">
              {user?.fullName}
            </Link>
          </li>
          <li>
            <a
              onClick={() => {
                signOut();
                window.location.href = "/";
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
