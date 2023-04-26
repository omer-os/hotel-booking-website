import {
  GetReservations,
  reservation,
} from "components/app/api/reservations/route";
import RevitionTable from "components/components/ui/tabels/RevitionTable";
import Link from "next/link";
import React from "react";

export default function ThirdSection() {
  const reserved: any = GetReservations(5);
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between flex-1">
        <div className="text-2xl font-bold">Reservations Table</div>
      </div>
      <RevitionTable data={reserved} />
      <Link
        href="/admin/dashboard/reservations"
        className="text-primary mt-2 underline text-center"
      >
        View All Reservations
      </Link>
    </div>
  );
}
