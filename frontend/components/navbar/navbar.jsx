import React from 'react'; 
import { Link } from 'react-router-dom';

export default ({currentUser , logout}) => { 
    const display = currentUser ? (
        <div className="signed-in-navbar">
            <Link className="logo" to="/browse"></Link>
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
        </div>
    ) : (
        <div className="login-navbar">
            <Link className="logo" to="/">HENFLIX</Link>
            <Link className="btn" to="/login">Log In</Link>
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
