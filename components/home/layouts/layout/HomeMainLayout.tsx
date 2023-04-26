import React from "react";
import HomeMainNav from "../nav/HomeMainNav";

export default function HomeMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HomeMainNav />
      <div className="max-w-7xl px-6 pb-24 mx-auto w-full">{children}</div>
    </div>
  );
}
