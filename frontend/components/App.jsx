import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavbarContainer from './navbar/navbar_container.js';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

const App = () => {


    return (
        <div className="splash">
                {/* <Route path="/" component={Splash}/> */}
            <header className="navbar">
                <Route path="/" component={NavbarContainer}/>
            </header>
            <div>
                {/* <img className="bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/f1e267d6-6c89-4764-b978-5f074b26bea5/b3971fff-4585-4604-83a5-c2d03571d56b/US-en-20190722-popsignuptwoweeks-perspective_alpha_website_small.jpg" /> */}
                <AuthRoute path="/signup" component={SignupFormContainer}/>
                <AuthRoute path="/login" component={LoginFormContainer}/>
            </div>
        
                {/* <Route path="/browse" component=""/> */}
        </div>
    )
};

export default App;