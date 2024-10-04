import * as Yup from "yup";

export const signInValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

export const signUpValidationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
