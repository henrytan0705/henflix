import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashContainer from './splash/splash_container';
import MainContainer from './main/new_main_container';
import VideoPlayerContainer from './main/video/video_player/video_player_container';
import SearchContainer from './main/search_container';
// import Footer from './footer/footer';
// import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';
import { MainAuthRoute } from '../utils/main_route_util';
import { PlayerAuthRoute } from '../utils/video_player_route_util';
import { SearchAuthRoute } from '../utils/search_route_util';
const App = () => {
    return (
        <>
            <AuthRoute exact path="/" component={SplashContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <MainAuthRoute path="/browse" component={MainContainer}/>
            <PlayerAuthRoute exact path="/watch/:id" component={VideoPlayerContainer}/>
            {/* <SearchAuthRoute path ="/search/:query" component={SearchContainer}/> */}
            {/* <Footer /> */}
        </>
    )
};

export default App;
