import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const msp = state => {
    return {
        loggedIn: Boolean(state.session.userId)
    }
}

const Auth = ({ component: Component, path, loggedIn }) => {
    return (
        <Route path={path} render={(props) => (
            !loggedIn ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
        )} />
    )
}

export const PlayerAuthRoute = withRouter(connect(msp)(Auth));