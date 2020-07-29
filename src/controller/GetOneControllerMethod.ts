import { ApiResponse } from "../dto/response/ApiResponse";

export interface GetOneControllerMethod<TResponse> {
    getOne(req, res): Promise<ApiResponse<TResponse>>
}