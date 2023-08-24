import { archivo, poppins } from "./fonts";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
