import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
// import NavbarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
// import MainContainer from './main/main_container';
import Main from './main/main';
// import Footer from './footer/footer';
// import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';
import { MainAuthRoute } from '../utils/main_route_util';

const App = () => {
    return (
        <>
            {/* <NavbarContainer /> */}
            <AuthRoute exact path="/" component={SplashContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            {/* <MainAuthRoute path="/browse" component={MainContainer}/> */}
            <MainAuthRoute path="/browse" component={Main}/>
            {/* <Footer /> */}
        </>
    )
};

export default App;