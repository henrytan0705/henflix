import { connect } from 'react-redux';
import Main from './main';

const msp = state => {
    return {
        loggedIn: Boolean(state.session.userId)

    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(Main);