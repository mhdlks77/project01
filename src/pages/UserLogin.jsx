import { Formik, Form, Field } from "formik";
import { loginSchema } from "../validations/loginValidation";
import { Link } from "react-router-dom";


export default function () {

    // const onSubmit = (values, actions) {

    // }


    return (
        <>
            <div className="login-form">
                <Formik
                    initialValues={{
                        userName: '',
                        password: ''
                    }}
                    validationSchema={loginSchema}>
                    <Form>
                        <div>
                            <label htmlFor="userName">Username:</label>
                            <Field id="userName" type="text" name="userName" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field id="password" type="text" name="password" />
                        </div>
                    </Form>
                </Formik>
                <Link to="/signup">Signup</Link>
            </div>
        </>
    )
}