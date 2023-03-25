import React from "react";
import { Field, reduxForm } from 'redux-form'
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../AssistantsComponent/FormControl/FormsControls";


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Input}
                    placeholder={'Login'}
                    name={'login'}
                    validate={[requiredField]} />
            </div>
            <div>
                <Field component={Input}
                    placeholder={'Password'}
                    name={'password'}
                    validate={[requiredField]} />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberme'} /> remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />

    </div>
}
export default Login;
