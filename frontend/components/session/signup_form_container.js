import { connect } from 'react-redux';
import SessionForm from './sesions_form';
import { signup } from '../../actions/session_actions.js';

const msp = state => {
    debugger
    return {
        user: state.session.id,
        formType: "Sign up"
    }
}

const mdp = dispatch => {
    return {
        formAction: user => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm);