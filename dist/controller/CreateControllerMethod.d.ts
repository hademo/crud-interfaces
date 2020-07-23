import { ApiResponse } from "../dto/response/ApiResponse";
export interface CreateControllerMethod<TCreateRequest, TResponse> {
    create(createRequest: TCreateRequest): Promise<ApiResponse<TResponse>>;
}
