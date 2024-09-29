import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <div className="md:w-5/6 px-4  mx-auto">{children}</div>
      </body>
    </html>
  );
}
