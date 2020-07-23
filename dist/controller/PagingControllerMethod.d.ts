import { PagedResponse } from "../dto/response/PagedResponse";
import { PagingQuery } from "../dto/request/query/PagingQuery";
export interface PagingControllerMethod<TResponse> {
    getAllPaged(pagingQuery: PagingQuery): Promise<PagedResponse<TResponse>>;
}
