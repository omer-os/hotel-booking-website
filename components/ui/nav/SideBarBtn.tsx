"use client";
import { GlobalContext } from "components/components/lib/contexts/GlobalContext";
import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

export default function SideBarBtn() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setSideBarOpen(!sideBarOpen)}
      className="btn-ghost btn md:hidden"
    >
      {sideBarOpen ? <IoCloseSharp size={25} /> : <HiOutlineMenu size={25} />}{" "}
    </button>
  );
}
