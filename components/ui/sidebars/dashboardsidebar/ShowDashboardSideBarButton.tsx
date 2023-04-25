"use client";
import { DashboardSideBarContext } from "components/components/dashboard/DashboardWrapper";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function ShowDashboardSideBarButton() {
  const { open, setOpen } = useContext(DashboardSideBarContext);

  return (
    <button
      onClick={() => {
        setOpen(!open);
        console.log(open);
      }}
      className="btn btn-ghost"
    >
      {!open ? <FiMenu size={24} /> : <MdClose size={24} />}
    </button>
  );
}
