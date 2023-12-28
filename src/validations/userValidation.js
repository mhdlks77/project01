import * as yup from 'yup';

//defining object that defines the form validation
export const userSchema = yup.object().shape({
    name: yup.string().required(),
    age : yup.number().min(1).max(100).required(),
    gender: yup.string().required("Gender is required"),
    available: yup.boolean().oneOf([true])
})

