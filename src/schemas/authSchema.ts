import { object, ref, string } from "yup";

export const loginSchema = object({
  email: string().email("Please check again").required("Can't be empty"),
  password: string().required("Please check again").min(8, "Too short"),
});

export const registerSchema = object({
  email: string().email("Invalid Email").required("Email is required"),
  password: string().required("Password is required").min(8, "Too short"),
  confirmPassword: string()
    .required("Please check again")
    .oneOf([ref("password")], "Passwords must match"),
});
