import {
	combineReducers
} from 'redux';

import  productReducer from './product/reducer';

const reducer = combineReducers({
	product:productReducer
});
export default reducer;