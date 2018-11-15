import {Interceptor, InterceptorInterface, Action} from "routing-controllers";

@Interceptor()
export class NameCorrectionInterceptor implements InterceptorInterface {
    intercept(action: Action, content: any) {
        // console.log(action.response);
        console.log(content);
        // if (content.data.status) {
        //     return content.data.msg
        // } else {
        //     return content

        return content
    }

}