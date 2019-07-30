import { connect } from 'react-redux';
import SessionForm from './sesions_form';
import { login } from '../../actions/session_actions.js';

const msp = state => {
    return {
        user: state.user,
        formType: "Login"
    }
}

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);