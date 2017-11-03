const CHANGE_USERNAME = 'CHANGE_USERNAME';

const changeUsername = (name) => {
    return {
        type: CHANGE_USERNAME,
        payload: name
    }
};

export default {
    CHANGE_USERNAME,
    changeUsername
}