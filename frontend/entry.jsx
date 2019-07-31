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
    let body = document.getElementsByTagName('BODY')[0];
    debugger
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
        // body.classlist.remove('bg');
        body.className -= "bg;"
    } else {
        // debugger
        // body.classlist.add('bg');
        body.className += "bg;"
        store = configureStore();
        // debugger
    }
    // root.className

    //TESTING
    // const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
})