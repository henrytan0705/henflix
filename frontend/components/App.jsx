import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavbarContainer from './navbar/navbar_container.js';

import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
           <h1>HENFLIX IS LIVE!!</h1>
            {/* <Switch> */}
                <Route path="/" component={NavbarContainer}/>
                <Route exact path="/signup" component={SignupFormContainer}/>
                <Route exact path="/login" component={LoginFormContainer}/>
                {/* <Route path="/browse" component=""/> */}
            {/* </Switch> */}
        </div>
    )
};

export default App;