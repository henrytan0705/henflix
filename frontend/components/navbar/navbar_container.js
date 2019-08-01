import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';

const msp = state => {
    return {
        currentUser : state.session.userId,
        // loggedIn: Boolean(state.session.userId)
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Navbar);