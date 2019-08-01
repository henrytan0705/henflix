import React from 'react'; 
import { Link } from 'react-router-dom'

class Splash extends React.Component {
    render () {
        return ( 
            <div className="splash"> 
                <div className="splash-message">
                    <h1>See what's next.</h1>
                    <h3>WATCH ANYWHERE. CANCEL ANYTIME.</h3>
                    <p>Have an account? 
                        <Link to="/login">
                            <b className="splash-sign-in-link">Sign In</b>
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default Splash;