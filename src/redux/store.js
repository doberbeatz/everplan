import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import profile from './reducers/profileReducer'
import events from "./reducers/eventReducer";

export default function configureStore(initialState = {}) {
    return createStore(
        combineReducers({
            profile,
            events
        }),
        initialState,
        applyMiddleware(thunk)
    )
}