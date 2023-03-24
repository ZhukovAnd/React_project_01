import React from "react";
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={'input'} placeholder={'Login'} name={'login'} />
            </div>
            <div>
                <Field component={'input'} placeholder={'Password'} name={'password'} />
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberme'} /> remember me
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
