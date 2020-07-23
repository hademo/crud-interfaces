import { ApiResponse } from "../dto/response/ApiResponse";
export interface UpdateControllerMethod<TUpdateRequest, TResponse> {
    update(updateRequest: TUpdateRequest): Promise<ApiResponse<TResponse>>;
}
