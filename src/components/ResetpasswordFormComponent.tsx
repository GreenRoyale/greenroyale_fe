"use client";
import { resetPasswordValidationSchema } from "@/schema/validationSchemas";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const ResetPasswordComponent = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: any) => {
    console.log("Form values", values); // Correctly log form values
  };

  return (
    <>
      <div className="md:w-2/4 w-full p-4 mx-auto">
        <div className="flex flex-col items-center ">
          <h1 className="font-medium text-xl ">Reset Password</h1>
          <p>Choose a new password for your account </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-4 py-8">
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

            <button
              type="submit"
              className="bg-primarycolor p-3 rounded-md text-white"
            >
              Reset Password
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

export default ResetPasswordComponent;
