import SignUpFormComponent from "@/components/SignupFormComponent";
import Image from "next/image";
import Link from "next/link";
function SignUp() {
  return (
    <>
      <div className="flex">
        <div className="bg-[#E4FFF3] w-2/4 h-screen flex flex-col justify-between">
          <div className="px-16 pt-16 flex flex-col gap-12">
            <div className="w-[150px]">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>

            <div>
              <h1 className="font-medium text-4xl w-4/6">
                Welcome to the future of cleanliness{" "}
              </h1>
              <p className="text-xl w-4/6 ">
                Discover cutting-edge recycling solution powered by AI
              </p>
            </div>
          </div>{" "}
          <div className="px-20 pt-10">
            <Image
              src={"/signupimage.png"}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
        </div>
        <div className="w-1/2 h-screen flex items-center">
          <SignUpFormComponent />
        </div>
      </div>
    </>
  );
}

export default SignUp;
