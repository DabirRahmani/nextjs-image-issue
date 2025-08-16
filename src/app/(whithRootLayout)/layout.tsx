import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "فروشگاه ست",
  description: "ست فروشگاه محتوای با کیفیت و تضمین شد SET.IR ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`antialiased`}>
      <div className="max-w-[1920px] mx-auto w-full overflow-x-clip">
        {children}
      </div>
    </div>
  );
}
