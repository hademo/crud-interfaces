import { ApiResponse } from "../dto/response/ApiResponse";

export interface CrudController<TResponse, TCreateRequest, TUpdateRequest>
    {
        getOne(): Promise<ApiResponse<TResponse>>;

        create(createRequest: TCreateRequest): Promise<ApiResponse<TResponse>>;

        update(updateRequest: TUpdateRequest): Promise<ApiResponse<TResponse>>;

        delete(): Promise<any>;
    }