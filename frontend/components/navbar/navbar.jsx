import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = ({currentUser , logout}) => { 
    const display = currentUser ? (
        <div className="signed-in-navbar nav-bar">
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
                        <li><Link onClick={logout} to="/">Log out</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    ) : (
        <div className="splash-navbar nav-bar">          
            <Link to="/" className="logo-wrapper">
                <img className="logo-image" src={window.logo}/>
            </Link>
           
            <Link className="sign-in-btn" to="/login">Sign In</Link>    
       </div>
    )

    return (
        <>
            {display}
        </>
    )
}

export default Navbar;