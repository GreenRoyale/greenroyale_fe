import Footer from "@/components/Footer";
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

        <div className="w-5/6 mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
