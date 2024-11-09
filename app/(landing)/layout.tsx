import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Fasih's Digital Creations | Web Development Portfolio</title>
      </head>
      <body className="bg-zinc-900">
        {children}
      </body>
    </html>
  );
}
