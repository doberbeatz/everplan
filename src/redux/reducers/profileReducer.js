import {CHANGE_USERNAME} from '../actions/profileActions'

const initialState = {
    isLoggedIn: true,
    userData: {
        name: 'Roman',
        age: 27,
    },
};

const profile = (state = initialState, action) => {
    switch (action.name) {
        case CHANGE_USERNAME:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.name
                }
            };
            break;
        default:
            return state
    }
};

export default profile