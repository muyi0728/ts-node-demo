interface IRedis {
    port: string,
    host: string,
    db: number
}

export interface IConfig {
    port: number,
    baseUrl: string,
    redis: IRedis,
    secretOrPrivateKey: string
}