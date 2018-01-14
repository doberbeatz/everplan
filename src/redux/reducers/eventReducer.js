import {EVENTS_CREATE, EVENTS_LOADING} from '../actions/eventActions'

const initialState = {
    items: [],
    isLoading: true
};

const events = (state = initialState, action) => {
    switch (action.type) {
        case EVENTS_CREATE:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        [action.id]: {
                            id: action.id,
                            text: action.text
                        }
                    }
                ]
            };
        case EVENTS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
                items: action.items
            };
        default:
            return state
    }
};

export default events