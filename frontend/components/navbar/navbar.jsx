import React from 'react'; 
import { Link } from 'react-router-dom';
import { Search, Bell } from 'react-feather';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrolled: false,
            switchTab: false,
            searchBox: false,
            searchInput: ""
        }
        this.searchField = React.createRef();
        // this.searchButton = React.createRef();
        this.addScrollListener = this.addScrollListener.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.displaySearchBox = this.displaySearchBox.bind(this);
        this.hideSearchBox = this.hideSearchBox.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.clearSearchBox = this.clearSearchBox.bind(this);
        this.query = "";
        this.searchId;
    }

    addScrollListener() {
        window.addEventListener('scroll', () => {
            let yOffset = window.pageYOffset;
            // console.log(`${yOffset}`);
            if (yOffset === 0 && this._mount) {
                if (this.state.scrolled) this.setState({scrolled: false})
            } else {
                if (!this.state.scrolled) this.setState({scrolled: true})
            }
        })
    }

    switchTab() {
        this.setState({switchTab: true});
    }

    displaySearchBox() {
        this.setState({searchBox: true});
    }

    hideSearchBox() {
        this.setState({searchBox: false});
    }

    updateSearch(){
        if (!!this.searchId) {
            clearTimeout(this.searchId);
        }

        let searchQuery = this.searchField.current.value;
        let emptySearch = true;

        if (searchQuery === undefined) {
            this.props.searchingForVideos(false, searchQuery);
            this.hideSearchBox();
            this.props.history.push('/browse');
            return;
        }

        for (let i = 0; i < searchQuery.length; i++) {
            if(searchQuery[i] !== " ") emptySearch = false;
        }

        if (emptySearch === true) {
            this.props.searchingForVideos(false, searchQuery);

            this.searchId = setTimeout(() => {
                this.props.history.push('/browse');
            }, 1000)
        } else {
            this.props.searchingForVideos(true, searchQuery);

            this.searchId = setTimeout(function () {
                this.setState({ searchInput: this.searchField.current });
                this.props.retrieveSearch(searchQuery);
                this.props.history.push(`/search/${searchQuery}`);
            }.bind(this), 1000);
        }
    }

    clearSearchBox() {
        this.searchField.current.value = "";
        this.updateSearch();
        this.hideSearchBox();
    }

    componentDidMount() {
        if (this.props.url === "main"){
            this.addScrollListener();

            if (this.props.path !== "/browse"){
                let emptySearch = true;
                this.query = this.props.search;
                if(this.query){
                    for (let i = 0; i < this.query.length; i++) {
                        if (this.query[i] !== " ") {
                            emptySearch = false;
                        }
                    }

                    this.setState({searchBox: true});
                    this.searchField.current = {value: this.query};
  
                    if (!emptySearch) {
                        this.props.retrieveSearch(this.query);
                        this.props.searchingForVideos(true, this.query);
                    }

                }
            }
        }
        this._mount = true;
    }                

    componentWillUnmount() {
        this._mount = false;
        // this.searchField = null;
    }

    render(){
        let display;
        const hasBackground = this.state.scrolled ? "bg" : "bg-none";
        let showPath = "";
        let moviePath = "";
        let animationPath = "";
        let foodPath = "";
        let liveActionPath = "";
        let educationalPath = "";

        let visibleSearchBox = (this.state.searchBox) ? "show-search" : "hide-search";
        let visibleSearchIcon = (this.state.searchBox) ? "hide-icon" : "show-icon";

        if (this.props.url === "main") {
            if (!this.props.genres.length) return null;
            let tvGenreId = this.props.genres.filter(genre => genre.genre ==="TV Show")[0].id;
            let movieGenreId = this.props.genres.filter(genre => genre.genre ==="Movie")[0].id;
            let animationGenreId = this.props.genres.filter(genre => genre.genre ==="Animation")[0].id;
            let foodGenreId = this.props.genres.filter(genre => genre.genre ==="Food")[0].id;
            let liveActionGenreId = this.props.genres.filter(genre => genre.genre ==="Live Action")[0].id;
            let educationalGenreId = this.props.genres.filter(genre => genre.genre ==="Educational")[0].id;
            showPath = `/browse/genre/${tvGenreId}`;
            moviePath = `/browse/genre/${movieGenreId}`;
            animationPath = `/browse/genre/${animationGenreId}`;
            foodPath = `/browse/genre/${foodGenreId}`;
            liveActionPath = `/browse/genre/${liveActionGenreId}`;
            educationalPath = `/browse/genre/${educationalGenreId}`;
        }

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
                    <Link className="browse-logo" 
                        to="/browse"
                        onClick={this.clearSearchBox}>
                        <img className="browse-logo-image" src={window.logo}/>
                    </Link>

                    <ul className="navbar-left-wrapper">
                        <li className="home-tab selected-tab"><Link className="tab" to="/browse">Home</Link></li>
                        <li className="nav-tab">
                            <Link className="tab" 
                                to={showPath}
                                onClick={this.switchTab}
                            >
                                TV Shows
                            </Link>   
                        </li>
                        <li className="nav-tab">
                            <Link className="tab" 
                                to={moviePath}
                                onClick={this.switchTab}
                            >
                                Movies
                            </Link>
                        </li>
                        <li className="nav-tab">
                            <Link className="tab" 
                                to={animationPath}
                                onClick={this.switchTab}
                            >
                                Animation
                            </Link>
                        </li>                   
                        <li className="nav-tab">
                            <Link className="tab" 
                                to={foodPath}
                                onClick={this.switchTab}
                            >
                                Food/Horror
                            </Link>
                        </li>
                        <li className="nav-tab">
                            <Link className="tab" 
                                to={liveActionPath}
                                onClick={this.switchTab}
                            >
                                Live Action
                            </Link>
                        </li>
                        <li className="nav-tab">
                            <Link className="tab" 
                                to={educationalPath}
                                // to="/browse"
                                onClick={this.switchTab}
                            >
                                Educational
                            </Link>
                        </li>
                        {/* <li className="nav-tab"><Link className="tab" to="/browse">Recently Added</Link></li> */}
                        {/* <li className="nav-tab"><Link className="tab" to="/browse">My List</Link></li> */}
                    </ul>

                    <div className="navbar-right-wrapper">
                        <div className="nav-tab2">

                            <div className="search-box">
                                <button className={`search-tab ${visibleSearchIcon}`}>
                                    <span className="search-icon nav-right">
                                        <i className="fas fa-search"
                                        onClick={this.displaySearchBox}  
                                        // ref={this.searchButton}  
                                        >
                                        </i>
                                    </span>
                                </button>
                               
                                <div className={`search-input ${visibleSearchBox}`}
                                    onBlur={this.hideSearchBox}>
                                    <form className="show-search-form">
                                        <span className="search-icon-in-box"><i className="fas fa-search"></i></span>
                                        <input 
                                            id="search-input-box"
                                            type="text"
                                            placeholder="Titles, genres"
                                            ref={this.searchField}
                                            onChange={this.updateSearch}
                                            // value = {this.props.search}
                                            // value={this.query}
                                            value={this.props.query}
                                            >
                                        </input>
                                        <span></span>
                                    </form>
                                </div>

                            </div>
                            
                        </div>

                        <div className="nav-tab2">
                            <a target="_blank" href="https://github.com/henrytan0705/henflix" className="nav-right">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                        <div className="nav-tab2">
                            <a target="_blank" href="https://www.linkedin.com/in/henry-0705/" className="nav-right">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>

                        <div>
                            <a target="_blank" href="https://www.angel.co/henry-tan-8/" className="nav-right">
                                    <i className="fab fa-angellist"></i>
                            </a>
                        </div>

                        {/* <div className="nav-tab2"> */}
                            {/* <button>
                                <span className="nav-right">
                                    <Bell/>
                                </span>
                            </button>
                        </div> */}


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