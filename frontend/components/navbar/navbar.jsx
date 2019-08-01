import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = ({currentUser , logout}) => { 
    const display = currentUser ? (
        <nav className="signed-in-navbar">
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
            <ul>
                <li>
                    <a>A</a>
                    <ul class="dropdown">
                        <li><a>Account</a></li>
                        <li><a>Help Center</a></li>
                        <li><Link onClick={logout} to="/">Log out</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    ) : (
        <nav className="login-navbar">
            <Link className="logo" to="/">
                {/* <img src="../../../app/assets/images/logo.png" /> */}
                <img src="https://fontmeme.com/permalink/190801/672c9b4cb0dcf4b4c351a7c3b05e52ea.png" />
            </Link>
            <Link className="sign-in-btn" to="/login">Sign In</Link>
       </nav>
    )

    return (
        <header className="nav-bar">
            {display}
        </header>
    )
}

export default Navbar;