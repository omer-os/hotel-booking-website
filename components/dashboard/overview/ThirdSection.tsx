import RevitionTable from "components/components/ui/tabels/RevitionTable";
import React from "react";

export default function ThirdSection() {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between flex-1">
        <div className="text-2xl font-bold">Overview</div>
      </div>
      <RevitionTable />
    </div>
  );
}
