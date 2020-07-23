import { ApiResponse } from "../dto/response/ApiResponse";

export interface GetOneControllerMethod<TResponse> {
    getOne(): Promise<ApiResponse<TResponse>>
}