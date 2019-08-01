import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    //TESTING
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    //TESTING

    let store;

    // debugger
    if (window.currentUser) {
        // debugger
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            }, 
            session: {
                userId: window.currentUser.id
            }
        }
        store = configureStore(preloadedState);

    } else {
        // debugger
        store = configureStore();
    }

    //TESTING
    // const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
})