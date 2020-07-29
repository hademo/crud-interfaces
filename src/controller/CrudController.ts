import { ApiResponse } from "../dto/response/ApiResponse";

export interface CrudController<TResponse, TCreateRequest, TUpdateRequest>
    {
        getOne(req, res): Promise<ApiResponse<TResponse>>;

        create(createRequest: TCreateRequest, req, res): Promise<ApiResponse<TResponse>>;

        update(updateRequest: TUpdateRequest, req, res): Promise<ApiResponse<TResponse>>;

        delete(req, res): Promise<any>;
    }