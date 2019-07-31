import React from 'react';
import signup_form_container from './session/signup_form_container';
import login_form_container from './session/login_form_container';
import navbar_container from './navbar/navbar_container.js';

import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
           <h1>HENFLIX IS LIVE!!</h1>
            {/* <Switch> */}
                <Route path="/" component={navbar_container}/>
                <Route path="/signup" component={signup_form_container}/>
                <Route path="/login" component={login_form_container}/>
            {/* </Switch> */}
        </div>
    )
};

export default App;