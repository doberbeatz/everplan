export const EVENTS_CREATE = 'EVENTS_CREATE';
export const EVENTS_FETCHED = 'EVENTS_FETCHED';

let nextEventId = 0;
export const createEvent = ({ text }) => ({
    type: EVENTS_CREATE,
    id: nextEventId++,
    text: text,
});

export const eventsFetched = ({ events }) => ({
    type: EVENTS_FETCHED,
    events: events,
});