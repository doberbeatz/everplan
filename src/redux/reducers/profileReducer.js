import {CHANGE_USERNAME} from '../actions/profileActions'

const profile = (state = {}, action) => {
    switch (action.name) {
        case CHANGE_USERNAME:
            return {
                ...state,
                name: action.name
            };
            break;
        default:
            return state
    }
};

export default profile