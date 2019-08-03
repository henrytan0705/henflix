import React from 'react'; 
import { Link } from 'react-router-dom'
import NavbarContainer from '../navbar/navbar_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount(){
        // this.props.checkUrl();
    }

    demoLogin(e){
        e.preventDefault();
        const user = {
            email: "demoLogin@gmail.com",
            password: "asdf1234"
        }
        this.props.login(user);
    }

    render () {
        return ( <>
            <NavbarContainer />
            <div className="splash">
                <div className="splash-wrapper">
                    <div className="splash-message-wrapper">
                        <h1 className="splash-message-1">See what's next.</h1>
                        <h1 className="splash-message-2">
                            WATCH ANYWHERE. CANCEL ANYTIME.
                        </h1>
                    </div>

                    <div className="splash-demo-button-wrapper">
                        <button 
                            className="splash-demo-button" 
                            onClick={this.demoLogin}>
                            <Link 
                                to="/browse"
                                className="splash-demo-button-text">
                                <span>TRY 30 DAYS FREE</span>
                                <span className="arrow"></span>
                            </Link>
                        </button>
                    </div>

                    <div className="splash-redirect-container">
                        <p className="splash-redirect-message">Have an account?</p>
                        <span className="splash-redirect-spacing"></span>
                        <Link 
                            to="/login"
                            className="splash-redirect-link">
                            Sign In
                        </Link>
                    </div>
                </div>
        </div>
        </>
        )
    }
}
export default Splash;