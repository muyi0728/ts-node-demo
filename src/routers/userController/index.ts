import {Controller, JsonController, Param, Body, Get, Post, Put, Delete, Header} from "routing-controllers"
import ServiceExt from '../../utils/serviceExt'
import RedisSevers from '../../utils/redisSevers'

// console.log();

@Controller('/users')
export class UserController extends ServiceExt {
    @Get("/user")

    async getAll(@Body() user: object): Promise<any> {
        const data = await this.httpGet('/user/member/getAllMemberFeeJson');
        const a = this.createToken({id: 444, phone:465465})
        return this.createResData(data.data,'222',2)
    }
}