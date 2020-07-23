import { ApiResponse } from "../dto/response/ApiResponse";
export interface GetOneWithIdentifierControllerMethod<TIdentifier, TResponse> {
    getOneById(id: TIdentifier): Promise<ApiResponse<TResponse>>;
}
