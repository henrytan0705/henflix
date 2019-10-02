import { connect } from 'react-redux';
import IndexItemButtons from './index_item_buttons';
import { addToList, removeFromList, retrieveList } from '../../../../../actions/ui_actions';

const msp = state => {
    return {
        myList: state.entities.myList
    }
}

const mdp = dispatch => {
    return {
        addToList: (video) => dispatch(addToList(video)),
        removeFromList: (video) => dispatch(removeFromList(video)),
        retrieveList: () => dispatch(retrieveList())
    }
}


export default connect(msp, mdp)(IndexItemButtons);