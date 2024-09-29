import { Facebook, Twitter, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-[#35725C]">
        <div className="w-5/6 mx-auto py-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-white">Legal</h1>
              <p className="text-sm text-white">Terms & Condition </p>
              <p className="text-sm text-white">Code of Conduct</p>

              <p className="text-sm text-white">Privacy & Data Protection</p>
              <p className="text-sm text-white">Privacy Policy</p>
              <p className="text-sm text-white">Compliance & trust</p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-white">Company</h1>
              <p className="text-sm text-white"> About </p>
              <p className="text-sm text-white">Contact</p>

              <p className="text-sm text-white">Blog</p>
              <p className="text-sm text-white">Academy</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-white">Socials</h1>
              <div className="flex gap-4">
                <div className="bg-[#ffffff30] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                  <TwitterIcon className="text-white" />
                </div>
                <div className="bg-[#ffffff30] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                  <Facebook className="text-white" />
                </div>
              </div>{" "}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-white">Socials</h1>
              <div>
                <p className="text-sm text-white">Email Address</p>
                <input
                  type="text"
                  placeholder="email address"
                  className="bg-[#204F38] text-xs border border-white rounded-md p-2"
                />
              </div>
              <Link
                href={"/signup"}
                className="bg-[#6FAE4D] p-2 text-white rounded-lg"
              >
                {" "}
                Subscribe{" "}
              </Link>
            </div>
          </div>
          <div className="py-10 flex justify-between">
            <div className="h-8">
              <Image
                src={"/logowhite.png"}
                alt="logo"
                className="w-full h-full object-contain"
                width={1000}
                height={1000}
              />
            </div>
            <p className="text-white text-xs">
              All rights reserved © 2024 Loreon Technologies
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
