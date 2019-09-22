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

    if (window.currentUser) {
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
        store = configureStore();
    }

    //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
})