"use client";

import { createContext, useState } from "react";

export const DashboardSideBarContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});
export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [OpenSideBar, setOpenSideBar] = useState(false);

  return (
    <DashboardSideBarContext.Provider
      value={{
        open: OpenSideBar,
        setOpen: setOpenSideBar,
      }}
    >
      {children}
    </DashboardSideBarContext.Provider>
  );
}
