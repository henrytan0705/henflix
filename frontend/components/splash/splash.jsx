import React from 'react'; 
import { Link } from 'react-router-dom'

class Splash extends React.Component {
    render () {
        return ( 
            <div className="splash"> 
                <div className="splash-message">
                    <div className="splash-top-message">
                        <h1>See what's next.</h1>
                        <h3>WATCH ANYWHERE. CANCEL ANYTIME.</h3>
                    </div>

                    <div className="splash-redirect">
                        <p>Have an account?</p>
                        <Link to="/login">
                            <b className="splash-sign-in-link">Sign In</b>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;