import { connect } from 'react-redux';
import SessionForm from './sesions_form';
import { signup } from '../../actions/session_actions.js';

const msp = state => {
    return {
        currentUser: state.session.userId,
        formType: "Sign Up",
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        formAction: user => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm);