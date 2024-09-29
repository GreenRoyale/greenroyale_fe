"use client";
import { forgotPasswordValidationSchema } from "@/schema/validationSchemas";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const ForgotPasswordComponent = () => {
  const initialValues = {
    email: "",
  };

  const onSubmit = (values: any) => {
    console.log("Form values", values); // Correctly log form values
  };

  return (
    <>
      <div className="md:w-2/4 w-full p-4 mx-auto">
        <div className="flex flex-col items-center ">
          <h1 className="font-medium text-xl ">Forgot Password</h1>
          <p>
            Enter your email to create your account, we will send you
            instructions on how to reset your password.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-4 py-8">
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

            <button
              type="submit"
              className="bg-primarycolor p-3 rounded-md text-white"
            >
              Send
            </button>

            <Link
              href={"/login"}
              className="border p-3 rounded-md flex justify-center gap-2"
            >
              Back to Login
            </Link>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
