import "../styles/userLogin.css"
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/userValidations";
import { useAuth } from "../context/AuthContext";
import Dashboard from "./Dashboard";



export default function () {

    const {isAuth, setAuth} = useAuth();
    const [authMessage, setAuthMessage] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth){
            setAuthMessage("Unauthorized")
        }
        localStorage.setItem("isAuth", isAuth)
        console.log("auth from useEf: "+ isAuth )
        
    }, [isAuth])

    useEffect(() => {
        if(isAuth){
            localStorage.setItem("isAuth", isAuth)
            navigate('/dashboard')
        }
        else{
            localStorage.setItem("isAuth", false)
        }
    }, [])


    const onSubmit = (values, actions) => {
        const localArray = JSON.parse(window.localStorage.getItem("credentialsArray"));
        if (localArray) {
            const inputUsername = values.username.toLowerCase();
            const userNameExists = localArray.some(user => user.username === inputUsername);
            if (userNameExists) {
                ;
                const user = localArray.find(user => user.username === inputUsername)
                if (values.password === user.password) {
                    setAuth(true);
                    actions.resetForm();
                    navigate('/dashboard', {replace: true})
                    return
                }
                setAuth(false)
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
                                    {touched.password && isSubmitting && <p className={isAuth ? "positive-msg" : "error-msg"}>{authMessage}</p>}
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