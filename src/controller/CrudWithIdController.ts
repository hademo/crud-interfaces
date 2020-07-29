import { ApiResponse } from "../dto/response/ApiResponse";

export interface CrudWithIdController<TResponse, TCreateRequest, TUpdateRequest, TIdentifier> {
    getOne(id: TIdentifier, req, res): Promise<ApiResponse<TResponse>>;

    create(createRequest: TCreateRequest, req, res): Promise<ApiResponse<TResponse>>;

    update(updateRequest: TUpdateRequest, id: TIdentifier, req, res): Promise<ApiResponse<TResponse>>;

    delete(id: TIdentifier, req, res);
}