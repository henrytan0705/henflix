import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = ({currentUser , logout}) => { 
    debugger
    const display = currentUser ? (
        <div className="signed-in-navbar">
            <Link className="logo" to="/browse">HENFLIX</Link>
            <button>Home</button>
            <button>TV Shows</button>
            <button>Movies</button>
            <button>Recently Added</button>
            <button>My List</button>
            <button></button>
            <button>KIDS</button>
            <button>DVD</button>
            <button></button>
            <button>Account</button>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="login-navbar">
            <Link className="logo" to="/">HENFLIX</Link>
            <Link className="btn" to="/login">Sign In</Link>
       </div>
    )

    return (
        <header className="nav-bar">
            <div>
                {display}
            </div>
        </header>
    )
}

export default Navbar;