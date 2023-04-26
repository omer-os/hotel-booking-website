import { NextResponse } from "next/server";

export type reservation = {
  id: number;
  guestName: string;
  contactDetail: string;
  checkInDate: Date;
  checkOutDate: Date;
  roomType: "single" | "double" | "suite";
  roomNumber: number;
  totalCost: number;
  paymentStatus: "paid" | "unpaid";
};

const reservations = [
  {
    id: 1,
    guestName: "John Doe",
    contactDetail: "john.doe@example.com",
    checkInDate: new Date("2023-05-01"),
    checkOutDate: new Date("2023-05-05"),
    roomType: "single",
    roomNumber: 101,
    totalCost: 500,
    paymentStatus: "paid",
  },
  {
    id: 2,
    guestName: "Jane Smith",
    contactDetail: "jane.smith@example.com",
    checkInDate: new Date("2023-05-02"),
    checkOutDate: new Date("2023-05-04"),
    roomType: "double",
    roomNumber: 202,
    totalCost: 800,
    paymentStatus: "paid",
  },
  {
    id: 3,
    guestName: "Bob Johnson",
    contactDetail: "bob.johnson@example.com",
    checkInDate: new Date("2023-05-06"),
    checkOutDate: new Date("2023-05-08"),
    roomType: "suite",
    roomNumber: 301,
    totalCost: 1200,
    paymentStatus: "unpaid",
  },
  {
    id: 4,
    guestName: "Sara Lee",
    contactDetail: "sara.lee@example.com",
    checkInDate: new Date("2023-05-10"),
    checkOutDate: new Date("2023-05-12"),
    roomType: "single",
    roomNumber: 102,
    totalCost: 300,
    paymentStatus: "paid",
  },
  {
    id: 5,
    guestName: "Tom Wilson",
    contactDetail: "tom.wilson@example.com",
    checkInDate: new Date("2023-05-15"),
    checkOutDate: new Date("2023-05-20"),
    roomType: "double",
    roomNumber: 203,
    totalCost: 1200,
    paymentStatus: "paid",
  },
  {
    id: 6,
    guestName: "Alice Green",
    contactDetail: "alice.green@example.com",
    checkInDate: new Date("2023-05-25"),
    checkOutDate: new Date("2023-05-30"),
    roomType: "suite",
    roomNumber: 302,
    totalCost: 2000,
    paymentStatus: "unpaid",
  },
  {
    id: 7,
    guestName: "Mike Brown",
    contactDetail: "mike.brown@example.com",
    checkInDate: new Date("2023-06-01"),
    checkOutDate: new Date("2023-06-05"),
    roomType: "single",
    roomNumber: 103,
    totalCost: 500,
    paymentStatus: "paid",
  },
  {
    id: 8,
    guestName: "Lisa Davis",
    contactDetail: "lisa.davis@example.com",
    checkInDate: new Date("2023-06-10"),
    checkOutDate: new Date("2023-06-15"),
    roomType: "double",
    roomNumber: 204,
    totalCost: 1500,
    paymentStatus: "unpaid",
  },
  {
    id: 9,
    guestName: "David Kim",
    contactDetail: "david.kim@example.com",
    checkInDate: new Date("2023-06-20"),
    checkOutDate: new Date("2023-06-25"),
    roomType: "suite",
    roomNumber: 303,
    totalCost: 2400,
    paymentStatus: "unpaid",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get("amount");
  const result = GetReservations(Number(amount));
  return NextResponse.json({
    result,
  });
}

export const GetReservations = (amount: number) => {
  const result = reservations.slice(0, Number(amount));
  return result;
};
