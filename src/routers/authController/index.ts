import {Controller, Param, Body, Get, Post, Put, Delete, InternalServerError, NotFoundError} from "routing-controllers"
import ServiceExt from "../../utils/serviceExt";

@Controller('/auth')

export class AuthController extends ServiceExt {
    @Get()
    async getAll(): Promise<any> {
        return new NotFoundError('服務器錯誤')
    }
}