import {createResData, createToken} from './common'
import {httpPost, httpGet} from '../config/httpConfig'
import {setDataToRedis, getDataFromRedis, isExistsFromRedis, setExpireToRedis} from './redisSevers'

/**
 * 扩展Service类以方便调用
 * 集成公共方法
 *
 * @export
 * @class ServiceExt
 */
export default class ServiceExt {
    /**
     * 创建token
     */
    readonly createToken = createToken;

    /**
     * 组装接口返回数据
     */
    readonly createResData = createResData;

    /**
     * http post
     */
    readonly httpPost = httpPost;

    /**
     * http get
     */
    readonly httpGet = httpGet;

    /**
     *  redis set
     */
    readonly setDataToRedis = setDataToRedis;

    /**
     *  redis get
     */
    readonly getDataFromRedis = getDataFromRedis;

    /**
     *  redis get has key
     */
    readonly isExistsFromRedis = isExistsFromRedis;


    /**
     *  redis set expire time
     */
    readonly setExpireToRedis = setExpireToRedis;
}
