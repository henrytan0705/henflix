import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavbarContainer from './navbar/navbar_container.js';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

const App = () => {
    return (
        <div>
           <h1>HENFLIX IS LIVE!!</h1>
            {/* <Switch> */}
                <Route path="/" component={NavbarContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                {/* <Route path="/browse" component=""/> */}
            {/* </Switch> */}
        </div>
    )
};

export default App;