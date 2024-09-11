import Topnav from "@/components/Topnav";

function Layout({ children }) {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
}

export default Layout;
