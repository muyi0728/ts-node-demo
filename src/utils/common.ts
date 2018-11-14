import {sign} from 'jsonwebtoken'
import envConfig from '../config/envConfig'

interface ResData {
    data: any
    msg: string
    errCode: number
}

interface TokenData {
    id: number
    phone: number
}

export function createResData(data: any, msg = 'success', errCode = 0): ResData {
    return { data, msg, errCode }
}

export function createToken(createTokenData: TokenData): string {
    return sign(createTokenData, envConfig.secretOrPrivateKey, {
        expiresIn: 3600 * 24 * 7
    })
}