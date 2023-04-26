import "../styles/globals.css";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  display: "auto",
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html data-theme="light" lang="en">
        <body className={roboto.className + "pb-10"}>{children}</body>
      </html>
    </>
  );
}
