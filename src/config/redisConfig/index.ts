import redis from 'redis'
import envConfig from '../envConfig'

/**
 * 创建redis服务
 * @param port 端口
 * @param host 地址
 * @param db redis数据库仓库号
 * @param no_ready_check
 */

// 此redis服务用于订阅redis回调消息（不可用于其他服务）（bd15）
const redisClientForSubscribe = redis.createClient(envConfig.redis.port, envConfig.redis.host, {db: envConfig.redis.db, no_ready_check: true});

// 此redis服务用于node端设置存储和读取redis数据操作（bd15）
const redisClient = redis.createClient(envConfig.redis.port, envConfig.redis.host, {db: envConfig.redis.db, no_ready_check: true});

// 此redis服务用于读取java端存储的redis数据操作（db2）
const redisClientJava = redis.createClient(envConfig.redis.port, envConfig.redis.host, {db: 2, no_ready_check: true});


/**
 * 订阅redis服务消息
 */

redisClientForSubscribe.on('ready', res => {

    redisClientForSubscribe.psubscribe('__keyevent@15__:expired');

    redisClientForSubscribe.on("pmessage", (pattern, channel, expiredKey) => {
        // 此处处理当session过期时的逻辑

    })
});

redisClientForSubscribe.on('error', res => {
    // logConfig.logger.info(`redis start：redis is error: ${res}`);
});

export {redisClient, redisClientJava};