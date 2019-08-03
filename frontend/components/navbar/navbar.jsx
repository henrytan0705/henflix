import React from 'react'; 
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let display;
        if(this.props.url === "splash") {
            display = (
                <div className="splash-navbar">          
                    <Link to="/" className="logo-wrapper">
                        <img className="logo-image" src={window.logo}/>
                    </Link>
                
                    <Link className="sign-in-btn" to="/login">Sign In</Link>    
                </div>
            )
        } else if (this.props.url === "form") {
            display = (
                <div className="form-navbar">
                    <Link to="/" className="form-logo-wrapper">
                        <img className="form-logo-image" src={window.logo} />
                    </Link>
                </div>  
            )
        } else if (this.props.url === "main"){
            display = (
                <div className="signed-in-navbar">
                    <Link className="logo" to="/browse">HENFLIX</Link>
                    <button>Home</button>
                    <button>TV Shows</button>
                    <button>Movies</button>
                    <button>Recently Added</button>
                    <button>My List</button>
                    <input className="search-bar" type="text" placeholder="Titles, people, genres"></input>
                    <button>KIDS</button>
                    <button>DVD</button>
                    <button></button>
                    <ul className="user-dropdown">
                        <li>   
                            <i className="fas fa-user-circle"></i>
                            <ul className="dropdown">
                                <li><a>Account</a></li>
                                <li><a>Help Center</a></li>
                                <li onClick={this.props.logout}><Link  to="/">Log out</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        }

    return (
        <>  
            {display}
        </>
    )
    }
}
export default Navbar;