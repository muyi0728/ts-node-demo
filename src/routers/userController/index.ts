import {Controller, JsonController, Param, Body, Get, Post, Put, Delete, Header} from "routing-controllers"
import ServiceExt from '../../utils/serviceExt'

// console.log();

@Controller('/users')
export class UserController extends ServiceExt {
    @Get("/user")

    async getAll(@Body() user: object): Promise<any> {
        const data = await this.httpGet('/user/member/getAllMemberFeeJson');
        const token = this.createToken({id: 123456, phone:13866666666});
        await this.setDataToRedis('token', token);
        return this.createResData(data.data,'222',2)
    }
}