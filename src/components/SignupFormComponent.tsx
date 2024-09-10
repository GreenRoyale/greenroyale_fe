"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const SignUpFormComponent = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values: any) => {
    console.log("Form values", values); // Correctly log form values
  };

  return (
    <>
      <div className="w-2/4 mx-auto">
        <div className="flex flex-col items-center ">
          <h1 className="font-medium text-xl ">Sign Up to GreenRoyale</h1>
          <p>Welcome back! We&apos;ve missed you!</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-4 py-8">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="firstname" className="text-[14px] text-gray-700">
                First Name
              </label>
              <Field
                type="text"
                id="firstname"
                name="firstname"
                className="border p-3 text-sm rounded-lg"
                placeholder="eg: John"
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="lastname" className="text-[14px] text-gray-700">
                Last Name
              </label>
              <Field
                type="text"
                id="lastname"
                name="lastname"
                className="border p-3 text-sm rounded-lg"
                placeholder="eg: Doe"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="email" className="text-[14px] text-gray-700">
                Email Address
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="border p-3 text-sm rounded-lg"
                placeholder="eg: johndoe@gmail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="password" className="text-[14px] text-gray-700">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="border p-3 text-sm rounded-lg"
                placeholder=""
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label
                htmlFor="confirmPassword"
                className="text-[14px] text-gray-700"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="border p-3 text-sm rounded-lg"
                placeholder=""
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div className="w-full flex justify-end">
              <Link href={"/forgot-password"} className="text-sm">
                Forgot Password{" "}
              </Link>
            </div>

            <button
              type="submit"
              className="bg-primarycolor p-3 rounded-md text-white"
            >
              Sign Up
            </button>

            <button
              type="submit"
              className="border p-3 rounded-md flex justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.653 7.3455L6.9385 9.755C7.8275 7.554 9.9805 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.659 2 5.328 4.1685 3.653 7.3455Z"
                  fill="#F97316"
                />
                <path
                  d="M12.5 22C15.083 22 17.43 21.0115 19.2045 19.404L16.1095 16.785C15.0718 17.5742 13.8037 18.001 12.5 18C9.899 18 7.6905 16.3415 6.8585 14.027L3.5975 16.5395C5.2525 19.778 8.6135 22 12.5 22Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
              Sign Up with Google
            </button>

            <div className="w-full flex justify-center gap-2">
              <p className="text-sm">Already have an account? </p>{" "}
              <Link className="text-sm text-primarycolor" href={"/login"}>
                {" "}
                Sign In{" "}
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUpFormComponent;
