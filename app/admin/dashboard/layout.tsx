import DashboardWrapper from "components/components/dashboard/DashboardWrapper";
import DashboardNav from "components/components/ui/nav/DashboardNav";
import DashboardSideBar from "components/components/ui/sidebars/dashboardsidebar/DashboardSideBar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <DashboardWrapper>
      <div className="grid bg-base-200 h-screen w-full grid-rows-[auto_1fr] md:grid-cols-[auto_1fr]">
        <DashboardSideBar />
        <DashboardNav />
        <div className="overflow-scroll">{children}</div>
      </div>
    </DashboardWrapper>
  );
}
