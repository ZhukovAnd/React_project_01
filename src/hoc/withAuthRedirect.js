import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            const isAuthUser = async() => {
                await this.props.setAuthUserData()
           
            if(!this.props.isAuth) return <Navigate to='/login' />//redirect to login
 }
       isAuthUser()
            return <Component {...this.props} />        
        } 
    }
    

let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}