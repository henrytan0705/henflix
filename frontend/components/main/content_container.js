import { connect } from 'react-redux';
import Content from './content';

const msp = state => {
    return {
        currentUser: state.session.userId
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(Content);