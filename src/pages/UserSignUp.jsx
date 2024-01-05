import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { loginSchema } from "../validations/loginValidation"
import {} from "../styles/userSignUp.css"

export default function UserSignUp() {

    // const [credentials, setCredetnials] = useState({})

    const [credentialsArray, setCredetnialsArray] = useState([]);
    const [usernameExists, setUsernameExists] = useState(false);


    useEffect(() => {
        if (credentialsArray != 0) {
            window.localStorage.setItem("credentialsArray", JSON.stringify(credentialsArray));
        }
    }, [credentialsArray])

    useEffect(() => {
        const storageArray = JSON.parse(window.localStorage.getItem("credentialsArray"));
        if (storageArray) {
            setCredetnialsArray((arr) => [...storageArray])
        };
    }, [])

    const onSubmit = (values, actions) => {
        const localArray = JSON.parse(window.localStorage.getItem("credentialsArray"));
        if (localArray) {
            const userName = values.username.toLowerCase();
            const userNameExists = localArray.some(user => user.username === userName);
            if (userNameExists) {
                setUsernameExists(true);
                return;
            }
        }
        setUsernameExists(false);
        setCredetnialsArray((currArray) => [...credentialsArray, {
            username: values.username.toLowerCase(),
            password: values.password,
        }]);
        actions.resetForm();
    }


    return (
        <div className="UserSignUp">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={onSubmit}
                validationSchema={loginSchema}>
                {({ errors, touched }) => (
                    <Form className="form">
                        <Field
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            className="input" />
                        {errors.username && touched.username && <p className="error-msg">{errors.username}</p>}
                        {usernameExists && <p className="error-msg">username already exists</p>}
                        <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="input" />
                        {errors.password && touched.password && <p className="error-msg">{errors.password}</p>}
                        <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                            className="input" />
                        {errors.confirmPassword && touched.confirmPassword && <p className="error-msg">{errors.confirmPassword}</p>}
                        <br />
                        <button type="submit">Sign Up</button>
                    </Form>
                )}
            </Formik>
            <Link to="/login">Login</Link>
        </div>
    )
}