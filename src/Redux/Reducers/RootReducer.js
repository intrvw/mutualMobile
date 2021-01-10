import {combineReducers} from 'redux'
import PostReducer from './PostReducer';

const RootReducer = combineReducers({
    PostReducer: PostReducer
})

export default RootReducer;