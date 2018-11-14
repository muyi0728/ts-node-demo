
import * as path from 'path'

let env = process.env.NODE_ENV || 'development';
env = env.toLowerCase();

interface StringArray {
    [index: string]: string;
}

const map: StringArray = {
    'production': 'node.prod.env',
    'development': 'node.dev.env',
    'testing': 'node.test.env',
};

const getPathName = (env: string): string => {
    return map[env]
};
const file = path.resolve(__dirname, getPathName(env));

const envConfig = require(file);

export default envConfig.ENV_CONFIG

console.log('Load config: [%s] %s', env, file);

