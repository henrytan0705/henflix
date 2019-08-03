import { connect } from 'react-redux';
import Navbar from './navbar';
// import { logout } from '../../actions/session_actions';

const msp = state => {
    return {
        currentUser: state.session.userId,
        url: "form"
    }
}

export default connect(msp)(Navbar);