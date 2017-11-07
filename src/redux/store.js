import {createStore, combineReducers} from 'redux'
import profile from "./reducers/profileReducer"
import events from "./reducers/eventReducer";

export default createStore(
    combineReducers({
        profile,
        events
    })
)