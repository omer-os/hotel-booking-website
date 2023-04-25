"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext({
  sideBarOpen: false,
  setSideBarOpen: (value: boolean) => {},
});

export default function GlobalContextComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [SideBarOpen, setSideBarOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ sideBarOpen: SideBarOpen, setSideBarOpen: setSideBarOpen }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
