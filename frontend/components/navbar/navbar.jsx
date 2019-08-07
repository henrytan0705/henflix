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
                // <div className="browse-navbar">
                //     <Link className="logo" to="/browse">HENFLIX</Link>

                //     <ul>
                //         <li>Home</li>
                //         <li>TV Shows</li>
                //         <li>Movies</li>
                //         <li>Recently Added</li>
                //         <li>My List</li>
                //     </ul>

                //     <input className="search-bar" type="text" placeholder="Titles, people, genres"></input>
                    
                //     <button>KIDS</button>
                //     <button>DVD</button>
                //     <button></button>
                //     <ul className="user-dropdown">
                //         <li>   
                //             <i className="fas fa-user-circle"></i>
                //             <ul className="dropdown">
                //                 <li><a>Account</a></li>
                //                 <li><a>Help Center</a></li>
                //                 <li onClick={this.props.logout}><Link  to="/">Sign out of Henflix</Link></li>
                //             </ul>
                //         </li>
                //     </ul>
                // </div>

                <div className="browse-navbar">
                    <Link className="browse-logo" to="/browse">HENFLIX</Link>

                    <ul className="navbar-left-wrapper">
                        <li className="home-"><Link className="tab" to="/browse">Home</Link></li>
                        <li className="nav-tab"><Link className="tab">TV Shows</Link>   </li>
                        <li className="nav-tab"><Link className="tab">Movies</Link></li>
                        <li className="nav-tab"><Link className="tab">Recently Added</Link></li>
                        <li className="nav-tab"><Link className="tab">My List</Link></li>
                    </ul>

                    <div className="navbar-right-wrapper">
                        <div className="nav-tab2">
                            <div className="search-box">
                                <button className="search-tab">
                                    <span className="search-icon"></span>
                                </button>
                            </div>
                        </div>

                        <div className="nav-tab2">
                            <Link to="/kids">KIDS</Link>
                        </div>

                        <div className="nav-tab2">
                            <Link to="/subscribe">DVD</Link>
                        </div>

                        <div className="nav-tab2">

                        </div>

                        <div className="nav-tab2">
                            <ul className="user-dropdown">
                                <li>
                                    <i className="fas fa-user-circle"></i>
                                    <ul className="dropdown">
                                        <li><a>Account</a></li>
                                        <li><a>Help Center</a></li>
                                        <li onClick={this.props.logout}><Link to="/">Sign out of Henflix</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
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