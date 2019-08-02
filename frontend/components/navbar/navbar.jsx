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
        </nav>
    ) : (
        <nav className="login-navbar">
            <div className="log">
            <Link to="/">
                {/* <img url={window.logo}/> */}
                {/* <img src="../../../app/assets/images/logo.png" /> */}
                <img className="logo-image" src="https://fontmeme.com/permalink/190801/672c9b4cb0dcf4b4c351a7c3b05e52ea.png" />
                {/* <img className="logo-image" ${this.props.navBarPosition" src="https://fontmeme.com/permalink/190801/672c9b4cb0dcf4b4c351a7c3b05e52ea.png" /> */}
            </Link>
            </div>

            <div>
            <Link className="sign-in-btn" to="/login">Sign In</Link>
            </div>
       </nav>
    )

    return (
        <header className="nav-bar">
            {display}
        </header>
    )
}

export default Navbar;