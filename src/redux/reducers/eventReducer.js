import {EVENTS_CREATE, EVENTS_FETCHED} from '../actions/eventActions'

let eventsList = [
    {
        id: 1,
        text: 'Text'
    }
];

const events = (state = [], action) => {
    switch (action.type) {
        case EVENTS_CREATE:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case EVENTS_FETCHED:
        default:
            return state
    }
};

export default events