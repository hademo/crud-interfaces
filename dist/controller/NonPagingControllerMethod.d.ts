import { ApiResponse } from "../dto/response/ApiResponse";
export interface NonPagingControllerMethod<TResponse> {
    getAll(search?: string): Promise<ApiResponse<TResponse[]>>;
}
