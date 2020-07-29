import { CrudController } from "./CrudController";

export abstract class CrudControllerBase<TResponse, TCreateRequest, TUpdateRequest> implements CrudController<TResponse, TCreateRequest, TUpdateRequest> {
    abstract getOne(req, res): Promise<import("..").ApiResponse<TResponse>>;

    abstract create(createRequest: TCreateRequest, req, res): Promise<import("..").ApiResponse<TResponse>>;

    abstract update(updateRequest: TUpdateRequest, req, res): Promise<import("..").ApiResponse<TResponse>>;

    abstract delete(req, res): Promise<any>;
}