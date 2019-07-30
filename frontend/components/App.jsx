import React from 'react';
import signup_form_container from './session/signup_form_container';
import login_form_container from './session/login_form_container';
import navbar_container from './navbar/navbar_container.js';

import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
           <h1>HENFLIX IS LIVE!!</h1>

            <Route path="" component={signup_form_container}/>
            <Route path="" component={login_form_container}/>
        </div>
    )
};

export default App;