import { combineReducers } from 'redux';

import AuthReducer from './auth.reducer.js';

export default () => combineReducers({
    Auth: AuthReducer
});