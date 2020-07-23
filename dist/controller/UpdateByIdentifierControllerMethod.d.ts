import { ApiResponse } from "../dto/response/ApiResponse";
export interface UpdateByIdentifierControllerMethod<TUpdateRequest, TResponse, TIdentifier> {
    updateById(updateRequest: TUpdateRequest, id: TIdentifier): Promise<ApiResponse<TResponse>>;
}
