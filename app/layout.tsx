export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Então TAR</h1>
        {children}
      </body>
    </html>
  );
}
