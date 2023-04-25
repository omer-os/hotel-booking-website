import GlobalContextComponent from "components/components/lib/contexts/GlobalContext";
import MainDrawer from "components/components/ui/drawers/MainDrawer";
import MainNav from "components/components/ui/nav/MainNav";
import React from "react";

export default function DashboardMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalContextComponent>
      <div className="flex h-screen w-full">
        <MainDrawer />
        <div className="flex flex-col flex-1 w-full">
          {/* @ts-ignore*/}
          <MainNav />
          <main className="py-4 px-6">{children}</main>
        </div>
      </div>
    </GlobalContextComponent>
  );
}
