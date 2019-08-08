import React from 'react'; 
import { Link } from 'react-router-dom';
import { Search, Bell } from 'react-feather';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.addScrollListener = this.addScrollListener.bind(this);
        this.state = {scrolled: false}
    }

    addScrollListener() {
        // debugger
        window.addEventListener('scroll', () => {
            let yOffset = window.pageYOffset;
            if (yOffset === 0) {
                if (this.state.scrolled) this.setState({scrolled: false})
            } else {
                if (!this.state.scrolled) this.setState({scrolled: true})
            }
        })
    }

    componentDidMount() {
        // debugger
        if (this.props.url === "main"){
            this.addScrollListener();
        }
    }

    render(){
        let display;
        const hasBackground = this.state.scrolled ? ("bg"):("")
        console.log(hasBackground)
        if(this.props.url === "splash") {
            display = (
                <div className="splash-navbar">          
                    <Link to="/" className="logo-wrapper">
                        <img className="logo-image" src={window.logo}/>
                    </Link>
                
                    <Link className="sign-in-btn" to="/login">
                        Sign In
                    </Link>    
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
                <nav className={`browse-navbar ${hasBackground}`}>
                    <Link className="browse-logo" to="/browse">
                        <img className="browse-logo-image" src={window.logo}/>
                    </Link>

                    <ul className="navbar-left-wrapper">
                        <li className="home-tab selected-tab"><Link className="tab" to="/browse">Home</Link></li>
                        <li className="nav-tab"><Link className="tab" to="/browse">TV Shows</Link>   </li>
                        <li className="nav-tab"><Link className="tab" to="/browse">Movies</Link></li>
                        <li className="nav-tab"><Link className="tab" to="/browse">Recently Added</Link></li>
                        <li className="nav-tab"><Link className="tab" to="/browse">My List</Link></li>
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
                            <Link className="nav-right" to="/browse">KIDS</Link>
                        </div>

                        <div className="nav-tab2">
                            <Link className="nav-right" to="/browse">DVD</Link>
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
                                        <li className=""><Link className="nav-right-font" to="/browse">Account</Link></li>
                                        <li className=""><Link className="nav-right-font" to="/browse">Help Center</Link></li>
                                        <li className="" onClick={this.props.logout}><Link className="nav-right-font" to="/">Sign out of Henflix</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }

    // if (this.props.url === "main"){
    //     this.addScrollListener();
    // }
        
    return (
        <>  
            {display}
        </>
    )
    }
}
export default Navbar;