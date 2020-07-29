import { ApiResponse } from "../dto/response/ApiResponse";

export interface NonPagingControllerMethod<TResponse> {
    getAll(search: string | undefined, req, res): Promise<ApiResponse<TResponse[]>>
}