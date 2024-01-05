import * as yup from "yup";

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "3 Characters minimum")
        .max(25, "25 Characters maximum")
        .matches(/^[^\s]+$/, "No spaces allowed")
        .required("Username is required"),
    password: yup
        .string()
        .min(8, "8 Characters minimum")
        .matches(
            /^[A-Za-z0-9!@#$%^&*()_-]+$/,
            "Only letter, numbers and special characters !@#$%^&*()_-]+$ are allowed"
        )
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation required"),
});
