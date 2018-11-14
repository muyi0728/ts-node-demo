import {redisClient} from '../config/redisConfig'


/** redis set 存储数据
 * @param key 键名
 * @param value 数据
 */
const setDataToRedis = (key: string, value: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        redisClient.set(`node:ts:${key}`, JSON.stringify(value), (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        })
    })
};

/** redis get 获取数据
 * @param key 键名
 */
const getDataFromRedis = (key: string) => {
    return new Promise((resolve, reject) => {
        redisClient.get(`node:ts:${key}`, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(response));
            }
        })
    })
};

/** redis 判断指定 key 是否存在
 * @param key 键名
 */
const isExistsFromRedis = (key: string) => {
    return new Promise((resolve, reject) => {
        redisClient.exists(`node:ts:${key}`, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        })
    })
};

/** redis 设置过期时间
 * @param key 键名
 * @param milliseconds 过期时间
 */
const setExpireToRedis = (key: string, milliseconds: number) => {
    return new Promise((resolve, reject) => {
        redisClient.pexpire(`node:ts:${key}`, milliseconds, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        })
    })
};

export {setDataToRedis, getDataFromRedis, isExistsFromRedis, setExpireToRedis}