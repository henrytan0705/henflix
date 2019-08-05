import { connect } from 'react-redux';
import Main from './main';

const msp = state => {
    return {
        loggedIn: Boolean(state.session.userId)
    }
}

export default connect(msp)(Main);