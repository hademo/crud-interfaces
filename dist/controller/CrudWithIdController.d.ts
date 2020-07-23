import { ApiResponse } from "../dto/response/ApiResponse";
export interface CrudWithIdController<TResponse, TCreateRequest, TUpdateRequest, TIdentifier> {
    getOne(id: TIdentifier): Promise<ApiResponse<TResponse>>;
    create(createRequest: TCreateRequest): Promise<ApiResponse<TResponse>>;
    update(updateRequest: TUpdateRequest, id: TIdentifier): Promise<ApiResponse<TResponse>>;
    delete(id: TIdentifier): any;
}
