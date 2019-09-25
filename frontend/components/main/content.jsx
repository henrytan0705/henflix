import React from 'react';
import NavbarMainContainer from '../navbar/navbar_main_container';
import MainContainer from './new_main_container';
import SearchContainer from './search_container';
import MyList  from './my_list';
import { MainAuthRoute } from '../../utils/main_route_util'
import { SearchAuthRoute } from '../../utils/search_route_util';


class Content extends React.Component {
    render() {
        return(
            <div className="main-page">
                <NavbarMainContainer />
                <MainAuthRoute path="/browse" component={MainContainer} />
                <SearchAuthRoute path="/search/:query" component={SearchContainer} />
                <MainAuthRoute path="/list" component={MyList} />
            </div>
        )
    }
}

export default Content;