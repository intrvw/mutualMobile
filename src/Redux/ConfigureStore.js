import {createStore} from 'redux'
import RootReducer from './Reducers/RootReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'

export const ConfigureStore=()=>{
    return createStore(RootReducer,devToolsEnhancer())
}