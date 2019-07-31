import { connect } from 'react-redux';
import SessionForm from './sesions_form';
import { login } from '../../actions/session_actions.js';

const msp = (state) => {
    // debugger

    return {
        user: state.session.id,
        formType: "Sign In"
    }
}

const mdp = dispatch => {
    return {
        formAction: user => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);