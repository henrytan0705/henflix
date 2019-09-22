import { connect } from 'react-redux';
import Navbar from './navbar';

const msp = state => {
    return {
        currentUser: state.session.userId,
        url: "form"
    }
}

export default connect(msp)(Navbar);