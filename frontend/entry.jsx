import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {login, logout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
})