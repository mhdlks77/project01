import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "3 Characters minimum")
        .max(25, "25 Characters maximum")
        .matches(/^[a-zA-Z0-9_.]*$/, "No spaces or special characters except . or _")
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

export const loginSchema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter password"),
});
