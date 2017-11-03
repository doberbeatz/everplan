import {CHANGE_USERNAME} from '../actions/userActions'

const userReducer = (state = {
    name: 'Roman'
}, action) => {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {
                ...state,
                name: action.payload
            };
            break;
        default:
            return state
    }
};

export default userReducer