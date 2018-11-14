import { IConfig } from './interface'

export const ENV_CONFIG: IConfig = {
    port: 8066,
    baseUrl: 'http://192.168.100.142:8765',
    redis: {
        port: '6543',
        host: '192.168.100.44',
        db: 15
    },
    secretOrPrivateKey: 'xiuba365'
};
