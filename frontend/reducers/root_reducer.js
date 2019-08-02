import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_reducer';
import errors_reducer from './errors_reducer';
import uiReducer from './ui_reducers';

const rootReducer = combineReducers({
    entities: entitiesReducer, 
    session: sessionsReducer,
    errors: errors_reducer,
    ui: uiReducer
});

export default rootReducer;