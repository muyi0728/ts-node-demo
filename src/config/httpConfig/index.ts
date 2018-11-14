import axios, {AxiosPromise} from 'axios'
import envConfig from '../envConfig/index'

axios.defaults.baseURL = envConfig.baseUrl;

const httpPost = (url: string, params?: object, headers?: object): AxiosPromise => {
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
            headers: headers || {}
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error);
            })
    })
};

const httpGet = (url: string, params?: object, headers?: object): AxiosPromise => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params || {},
            headers: headers || {}
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error);
            })
    })
};

export {httpGet, httpPost}