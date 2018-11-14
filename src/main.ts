import express from 'express'
import {Request, Response, NextFunction} from 'express-serve-static-core'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import expressJWT, {UnauthorizedError} from 'express-jwt'
import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import connectRedis from 'connect-redis'
import envConfig from './config/envConfig'
import {UNNECESSARY_AUTH_ROUTERS} from './config/authConfig'
import controllers from './routers'

const RedisStore = connectRedis(session);

// 创建 express 实例
const app = express();

// 加载 log4 日志配置
// logConfig.use(app);

// 将req.body中的字段反序列化
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

const redisOptions = {
    host: envConfig.redis.host,
    port: envConfig.redis.port,
    prefix: "node:ts:session:",
    db: envConfig.redis.db,
    ttl: 3600, // 单位秒
    logErrors: true
};
app.use(session({
    store: new RedisStore(redisOptions),
    name: 'sid',
    secret: envConfig.secretOrPrivateKey,
    resave: false,
    saveUninitialized: false,
}));

// 定义并创建token 验证中间件
app.use(expressJWT({
    secret: envConfig.secretOrPrivateKey,
}).unless({
    path: UNNECESSARY_AUTH_ROUTERS // 除了这个数组里接口地址，其他的接口都需要验证token合法性
}));

// 定义API接口访问拦截器
app.use((err: UnauthorizedError, req: Request, res: Response, next: NextFunction) => {
    // 验证用户token 是否合法
    if (err) {
        res.status(401).send(err.message);
    } else {
        next();
    }
});

useExpressServer(app, {
    routePrefix: 'api',
    controllers: [...controllers]
});

// 监听服务端口
app.listen(envConfig.port,() => {
    console.log('node run success and listen on port %s', envConfig.port)
});

// logConfig.logger.info('当前node环境变量为：' + (process.env.NODE_ENV || 'development'));

// logConfig.logger.info('node run success and listen on port %s', config.port);
