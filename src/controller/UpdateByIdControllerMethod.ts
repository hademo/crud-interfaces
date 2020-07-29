import { ApiResponse } from "../dto/response/ApiResponse";

export interface UpdateByIdControllerMethod<TUpdateRequest, TResponse, TIdentifier> {
    updateById(updateRequest: TUpdateRequest, id: TIdentifier, req, res): Promise<ApiResponse<TResponse>>
}