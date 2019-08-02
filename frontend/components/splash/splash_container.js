import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const msp = state => {
    return {
        currentUser: state.session.userId
    }
}

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user)),
    }
}

export default connect(msp, mdp)(Splash);