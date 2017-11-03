import {createStore, combineReducers} from 'redux'
import userReducer from "./reducers/userRedcer"

export default createStore(
    combineReducers({
        user: userReducer
    })
)