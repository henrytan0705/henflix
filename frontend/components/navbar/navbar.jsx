import React from 'react'; 
import { Link } from 'react-router-dom';
import { Search, Bell } from 'react-feather';

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
                <nav className="browse-navbar">
                    <Link className="browse-logo" to="/browse">
                        <img className="browse-logo-image" src={window.logo}/>
                    </Link>

                    <ul className="navbar-left-wrapper">
                        <li className="home-tab selected-tab"><Link className="tab" to="/browse">Home</Link></li>
                        <li className="nav-tab"><Link className="tab">TV Shows</Link>   </li>
                        <li className="nav-tab"><Link className="tab">Movies</Link></li>
                        <li className="nav-tab"><Link className="tab">Recently Added</Link></li>
                        <li className="nav-tab"><Link className="tab">My List</Link></li>
                    </ul>

                    <div className="navbar-right-wrapper">
                        <div className="nav-tab2">
                            <div className="search-box">
                                <button className="search-tab">
                                    <span className="search-icon nav-right">
                                        <Search />
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="nav-tab2">
                            <Link className="nav-right" to="/kids">KIDS</Link>
                        </div>

                        <div className="nav-tab2">
                            <Link className="nav-right" to="/subscribe">DVD</Link>
                        </div>

                        <div className="nav-tab2">
                            <button>
                                <span className="nav-right">
                                    <Bell/>
                                </span>
                            </button>
                        </div>

                        <div className="nav-tab2">
                            <ul className="user-dropdown">
                                <li>
                                    <i className="fas fa-user-circle"></i>
                                    <ul className="dropdown">
                                        <li className=""><Link className="">Account</Link></li>
                                        <li className=""><Link className="">Help Center</Link></li>
                                        <li className="" onClick={this.props.logout}><Link className="" to="/">Sign out of Henflix</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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