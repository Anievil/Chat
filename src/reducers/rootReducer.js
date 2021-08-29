import { combineReducers } from 'redux';
import messageStore from './messageReducer';

const appReducer = combineReducers({
    messageStore: messageStore,
});

export default appReducer;