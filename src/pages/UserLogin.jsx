import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from "../validations/userValidations";
import { useEffect, useState } from "react";
import "../styles/userLogin.css"
import {useNavigate} from "react-router-dom"

export default function () {

    const [auth, setAuth] = useState(false);
    const [authMessage, setAuthMessage] = useState("")

    useEffect(() => {
        if(auth){
            setAuthMessage("Authorized")
        }
        else{
            setAuthMessage("Unauthorized")
        }
    }, [auth])

    useEffect(() =>{
        setAuth(true)
    }, [])


    const onSubmit = (values, actions) => {
        const localArray = JSON.parse(window.localStorage.getItem("credentialsArray"));
        if (localArray) {
            const inputUsername = values.username.toLowerCase();
            const userNameExists = localArray.some(user => user.username === inputUsername);
            if (userNameExists) {;
                const user = localArray.find(user => user.username === inputUsername)
                if(values.password === user.password){
                    setAuth(true);
                    actions.resetForm();
                    return;
                }
                setAuth(false)
                console.log("auth: " + auth)
            }
            setAuth(false)
        }
    }


    return (
        <div className="UserLogin">
            <div className="login-form">
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={onSubmit}
                    validationSchema={loginSchema}>
                    {({ errors, touched, isSubmitting }) => (
                        <Form className="form">
                            <div>
                                <label htmlFor="userName">Username:</label>
                                <Field id="userName" type="text" name="username" className="input" />
                                {errors.username && touched.username && <p className="error-msg">{errors.username}</p>}
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <Field id="password" type="password" name="password" className="input" />
                                {errors.password && touched.password && <p className="error-msg">{errors.password}</p>}
                                {touched.password && isSubmitting && <p className={auth ? "positive-msg" : "error-msg"}>{authMessage}</p>}
                            </div>
                            <button type="submit">Log in</button>
                        </Form>
                    )}

                </Formik>
                <span><Link to="/signup" className="link-signup">Signup</Link></span>
            </div>
        </div>
    )
}