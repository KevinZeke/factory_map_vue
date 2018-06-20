import axios from 'axios'
import apiConf from './api.conf'
import Qs from 'qs'


export function userLogin(username, pwd) {
    return axios.post(apiConf.url + '/fphp/factory/login.php', Qs.stringify({username, pwd}), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
}

export function loginCheck() {
    return axios.get(apiConf.url + '/fphp/factory/login_check.php')
}