import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavbarContainer from './navbar/navbar_container.js';
import Splash from './splash/splash';
import Footer from './footer/footer';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

const App = () => {
    return (
        <>
            <NavbarContainer />
            <Route exact path="/" component={Splash}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            {/* <AuthRoute path="/browse" component="{}"/> */}
            {/* <Footer /> */}
        </>
    )
};

export default App;