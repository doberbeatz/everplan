export const CHANGE_USERNAME = 'CHANGE_USERNAME';

export const changeUsername = (name) => ({
    type: CHANGE_USERNAME,
    payload: name
});