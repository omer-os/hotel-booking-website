import HomeMainLayout from "components/components/home/layouts/layout/HomeMainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeMainLayout>{children}</HomeMainLayout>
    </>
  );
}
