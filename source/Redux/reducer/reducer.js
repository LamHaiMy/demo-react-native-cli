import {combineReducers} from 'redux';
import listItemReducer from './listItemReducer'
const reducer = combineReducers({
  listItem: listItemReducer,
});

export default reducer;