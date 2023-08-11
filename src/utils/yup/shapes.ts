import * as yup from "yup";

export const signInSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  export const createClientSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
  })