import { combineReducers } from 'redux';

import LibraryReducer from './library.reducer.js';
import SelectionReducer from './selection.reducer.js';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});