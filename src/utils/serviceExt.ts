import {createResData, createToken} from './common'
import {httpPost, httpGet} from '../config/httpConfig'

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
}
