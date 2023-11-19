import { archivo } from "@/fonts";
import { Toaster } from "react-hot-toast";
import SessionProvider from "./contexts/SessionProvider";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable}`}>
      <body>
        <SessionProvider>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
