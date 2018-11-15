import {Controller, JsonController, Param, Body, Get, Post, Put, Delete, Res, CookieParam, QueryParam, HttpError, NotFoundError} from "routing-controllers"
import ServiceExt from '../../utils/serviceExt'

interface Interface {
    uid: number,
    path: string
}

@Controller('/users')
export class UserController extends ServiceExt {
    @Get("/user")
    async getAll(@Body() user: object): Promise<any> {
        const data = await this.httpGet('/user/member/getAllMemberFeeJson');
        const token = this.createToken({id: 123456, phone:13866666666});
        await this.setDataToRedis('token', token);
        // if (!query) {
        //     throw new NotFoundError(`User was not found.`);
        // }
        return this.createResData(data.data,'222',2)
    }
}