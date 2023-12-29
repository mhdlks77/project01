import * as yup from 'yup';

//defining object that defines the form validation
export const userSchema = yup.object().shape({
    name: yup.string().required("Required"),
    age : yup.number().min(1).max(100).required("Required"),
    email: yup.string().email("Please enter a valid email").required(),
    gender: yup.string().oneOf(["Male", "Female"], "Please Select a valid gender").required("Gender is required"),
    available: yup.boolean().oneOf([true, false])
})

