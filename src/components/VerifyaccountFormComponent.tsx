"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const VerifyAccountComponent = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const onSubmit = (values: any) => {
    console.log("Form values", values); // Correctly log form values
  };

  return (
    <>
      <div className="w-2/4 mx-auto">
        <div className="flex flex-col  ">
          <h1 className="font-medium text-xl ">Check your Email</h1>
          <p>
            We have sent an email with the password reset information to
            m***@gmail.com.{" "}
          </p>
          <p className="text-sm text-grey-500">
            Didn’t receive the email? Check your spam folder or
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-4 py-8">
            <button
              type="submit"
              className="bg-primarycolor p-3 rounded-md text-white"
            >
              Resend Email
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

export default VerifyAccountComponent;
