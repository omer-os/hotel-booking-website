"use client";

import { reservation } from "components/app/api/reservations/route";

export default function RevitionTable({ data }: { data: reservation[] }) {
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>

              <th>id</th>
              <th>guestName</th>
              <th>contactDetail</th>
              <th>checkInDate</th>
              <th>checkOutDate</th>
              <th>roomType</th>
              <th>roomNumber</th>
              <th>totalCost</th>
              <th>paymentStatus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => {
              return (
                <tr key={item.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>{item.id}</td>
                  <td>{item.guestName}</td>
                  <td>{item.contactDetail}</td>
                  <td>{new Date(item.checkInDate).toLocaleDateString()}</td>
                  <td>{new Date(item.checkOutDate).toLocaleDateString()}</td>
                  <td>{item.roomType}</td>
                  <td>{item.roomNumber}</td>
                  <td>{item.totalCost}</td>
                  <td>{item.paymentStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
