import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="w-5/6 mx-auto py-8 flex justify-between items-center">
      <div className="h-10  ">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="logo"
          />
        </Link>{" "}
      </div>

      <div className="flex items-center gap-10">
        <Link href={"/"}> Solutions </Link>

        <Link href={"/"}> About </Link>

        <Link href={"/"}> Blog </Link>

        <Link href={"/"}> Contact</Link>

        <Link
          href={"/login"}
          className="p-4 border border-[#6FAE4D] text-[#6FAE4D] rounded-lg"
        >
          {" "}
          Sign In{" "}
        </Link>

        <Link
          href={"/signup"}
          className="bg-[#6FAE4D] p-4 text-white rounded-lg"
        >
          {" "}
          Get Started{" "}
        </Link>
      </div>
    </div>
  );
}

export default Header;
