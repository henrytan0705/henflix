import { connect } from 'react-redux';
import SessionForm from './sesions_form';
import { login, clearErrors } from '../../actions/session_actions.js';

const msp = state => {
    return {
        currentUser: state.session.userId,
        formType: "Sign In",
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        formAction: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(msp, mdp)(SessionForm);