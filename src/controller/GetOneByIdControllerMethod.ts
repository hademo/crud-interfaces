import { ApiResponse } from "../dto/response/ApiResponse";

export interface GetOneByIdControllerMethod<TIdentifier, TResponse> {
    getOneById(id: TIdentifier, req, res): Promise<ApiResponse<TResponse>>
}