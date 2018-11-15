import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

@Middleware({ type: "after" })
export class LoggingMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next: (err?: any) => any): void {
        console.log(request);
        next();
    }

}