import "../styles/UserDisplay.css"
import { userSchema } from "../validations/userValidation";
import { useFormik } from 'formik'
import { useState, useEffect } from "react";
import User from "../components/User";

const UserForm = ({newUser, setNewUser, userArray, setUserArray}) => {

    useEffect(() => {
        // console.log("new user: " + newUser.name);
    }, [newUser])

    useEffect(() => {
        // console.log("user array: " + JSON.stringify(userArray));
    }, [userArray])


    const onSubmit = (values, actions) => {
        // console.log(values);
        setNewUser((currUser) => ({...currUser, ...values}));
        setUserArray((currArray) =>[...currArray, values]);
        actions.resetForm();
    }

    const { values, touched, errors, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            gender: "",
            available: "",
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
                <div className="radio-container">
                    <div className="input-label">
                        <input className="radio"
                            type="radio"
                            name="available"
                            value={values.available}
                            onChange={handleChange} />
                        <label>Available</label>
                    </div>
                    <br />
                    <div className="input-label">
                        <input className="radio"
                            type="radio"
                            name="available"
                            value={values.available}
                            onChange={handleChange} />
                        <label>Unavailable</label>
                        <br />
                    </div>
                </div>
                <button disabled={isSubmitting} type="submit">Add User</button>
            </form>
        </div>
    )
}

export default UserForm;