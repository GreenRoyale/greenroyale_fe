import ForgotPasswordComponent from "@/components/ForgotpasswordComponent";
import SignInFormComponent from "@/components/SigninFormComponent";
import VerifyAccountComponent from "@/components/VerifyaccountFormComponent";
import Image from "next/image";

function ForgotPassword() {
  return (
    <>
      <div className="flex">
        <div className="bg-[#E4FFF3] w-2/4 h-screen hidden md:flex flex-col justify-between">
          <div className="px-16 pt-16 flex flex-col gap-12">
            <div className="w-[150px]">
              <Image
                src={"/logo.png"}
                width={1000}
                height={1000}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="font-medium text-4xl w-4/6">
                Verify your account{" "}
              </h1>
              <p className="text-xl w-4/6 ">
                Discover cutting-edge recycling solution powered by AI
              </p>
            </div>
          </div>{" "}
          <div className="px-20 pt-10">
            <Image
              src={"/lock.png"}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full h-screen flex items-center">
          <VerifyAccountComponent />
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
