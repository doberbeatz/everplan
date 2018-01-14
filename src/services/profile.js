import config from '../../conig/main'
import axios from 'axios'

export default {
    login: (username, password) => {
        axios.post(config.auth.host , {
            params: {
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    },

    getProfile: () => {
        return axios.get(config.auth.host);
    }
}