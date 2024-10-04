import Topnav from "@/components/Topnav";

function Layout({ children }: any) {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
}

export default Layout;
