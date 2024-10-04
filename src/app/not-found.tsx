import Topnav from "@/components/Topnav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NptFound() {
  return (
    <div className="h-full">
      <Topnav />
      <section className="container mx-auto max-h-screen h-screen not-found-page-height">
        <div className="flex flex-col justify-center lg:grid grid-cols-12 h-full lg:items-center">
          <section className="col-start-1 col-end-5 flex flex-col space-y-[20px] order-2 lg:order-none">
            <h1 className="text-[64px] font-bold hidden lg:block">404</h1>
            <h3 className="text-[40px] font-semibold hidden lg:block">
              Ooops !
            </h3>
            <h3 className="text-[40px] font-semibold hidden lg:block">
              Page Not Found
            </h3>
            <p className="font-medium text-center lg:text-left">
              This page doesn&apos;t exist or was removed! We suggest you go to
              home.
            </p>
            <Link href="/">
              <Button variant={"default"} className="w-full lg:w-max">
                Back to Home
              </Button>
            </Link>
          </section>

          <section className="col-start-7 col-end-13 order-1 lg:order-none">
            <Image
              src="/assets/img/404.svg"
              alt="404-page-not-found"
              width={1000}
              height={1000}
            />
          </section>
        </div>
      </section>
    </div>
  );
}
