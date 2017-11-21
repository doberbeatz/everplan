export const EVENTS_CREATE = 'EVENTS_CREATE';
let nextEventId = 4;
export const createEvent = ({text}) => ({
    type: EVENTS_CREATE,
    id: nextEventId++,
    text: text,
});

export const EVENTS_LOADING = 'EVENTS_LOADING';
export const eventsLoading = ({isLoading, items = []}) => ({
    type: EVENTS_LOADING,
    isLoading: isLoading,
    items: items,
});

export const itemsFetchData = () => {
    return (dispatch) => {
        dispatch(eventsLoading({isLoading: true}));

        setTimeout(() => {
            const fetchedItems = [
                {
                    id: 1,
                    text: 'First Text',
                },
                {
                    id: 2,
                    text: 'Second Text',
                },
                {
                    id: 3,
                    text: 'Third Text',
                },
            ];

            dispatch(eventsLoading({
                isLoading: false,
                items: fetchedItems,
            }));
        }, 5000);
    };
};