import React from 'react'; 
import { Link } from 'react-router-dom'

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
        return ( 
    //         <div className="splash"> 
    //             <div className="splash-message">
    //                 <div className="splash-top-message">
    //                     <h1>See what's next.</h1>
    //                     <h3>WATCH ANYWHERE. CANCEL ANYTIME.</h3>
    //                 </div>

    //                 <button className="splash-demo-button" onClick={this.demoLogin}><Link to="/browse">TRY 30 DAYS FREE  </Link></button>

    //                 <div className="splash-redirect">
    //                     <p>Have an account?</p>
    //                     <Link to="/login">
    //                         <b className="splash-sign-in-link">Sign In</b>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
// }

// const a = (
    <div className="splash">
            <div className="splash-wrapper">
                <div className="splash-message-wrapper">
                    <h1 className="splash-message-1">See what's next</h1>
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
                            TRY 30 DAYS FREE
                        </Link>
                    </button>
                </div>

                <div className="splash-redirect-container">
                    <p className="splash-redirect-message">Have an account?</p>
                    <span class="splash-redirect-spacing"></span>
                    <Link 
                        to="/login"
                        className="splash-redirect-link">
                        Sign In
                    </Link>
                </div>
            </div>
    </div>
    )
    }
}
export default Splash;