import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const msp = state => {
    return {
        loggedIn: Boolean(state.session.userId)
    }
}

const Auth = ({component: Component, path, exact, loggedIn}) => {
    return (
        <Route path={path} exact={exact} render={(props) => (
            !loggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to ="/browse"/>
            )
            )}/>
    )
}

export const AuthRoute =  withRouter(connect(msp)(Auth));