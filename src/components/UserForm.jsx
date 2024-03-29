import "../styles/UserDisplay.css"
import { userSchema } from "../validations/formValidation";
import { useFormik } from 'formik'
import { useState, useEffect } from "react";
import User from "../components/User";

const UserForm = ({ newUser, setNewUser, userArray, setUserArray, idCounter, setIdCounter }) => {


    const onSubmit = (values, actions) => {
        setNewUser((currUser) => ({
            ...currUser,
            ...values,
        }));
        setUserArray((currArray) => [...currArray, values]);
        actions.resetForm();
    }

    const { values, touched, errors, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            id: "",
            name: "",
            age: "",
            email: "",
            gender: "",
        },
        validationSchema: userSchema,
        onSubmit,
    });



    return (
        <div className="user-form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="text-input">
                    <input
                        className={errors.name && touched.name ? "input-error" : ""}
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Name"
                        onChange={handleChange} />
                    {errors.name && touched.name && <p className="error-msg">{errors.name}</p>}
                </div>
                <br />
                <div className="text-input">
                    <input
                        className={errors.age && touched.age ? "input-error" : ""}
                        type="text"
                        name="age"
                        value={values.age}
                        placeholder="Age"
                        onChange={handleChange} />
                    {errors.age && touched.age && <p className="error-msg">{errors.age}</p>}
                </div>
                <br />
                <div className="text-input">
                    <input
                        className={errors.email && touched.email ? "input-error" : ""}
                        type="text"
                        name="email"
                        value={values.email}
                        placeholder="email"
                        onChange={handleChange} />
                    {errors.email && touched.email && <p className="error-msg">{errors.email}</p>}
                </div>
                <br />
                <select
                    className={errors.gender && touched.gender ? "input-error" : ""}
                    name="gender"
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.gender && touched.gender && <p className="error-msg">{errors.gender}</p>}
                <br />
                <button disabled={isSubmitting} type="submit">Add User</button>
            </form>
        </div>
    )
}

export default UserForm;