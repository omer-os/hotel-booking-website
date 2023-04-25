import GlobalContextComponent from "components/components/lib/contexts/GlobalContext";
import MainDrawer from "components/components/ui/drawers/MainDrawer";
import MainNav from "components/components/ui/nav/MainNav";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalContextComponent>
      <div className="flex h-screen">
        <MainDrawer />
        <div className="flex flex-col flex-1">
          <MainNav />
          {children}
        </div>
      </div>
    </GlobalContextComponent>
  );
}
