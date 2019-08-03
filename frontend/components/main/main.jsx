import React from 'react';
import NavbarMainContainer from '../navbar/navbar_main_container';

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <NavbarMainContainer/>
                <h1>HELLO</h1>

            </div>
        )
    }
}

export default Main;