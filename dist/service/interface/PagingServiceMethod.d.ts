import { PagingQuery } from "../../dto/request/query/PagingQuery";
import { PagedResponse } from "../../dto/response/PagedResponse";
export interface PagingServiceMethod<TResponse> {
    getAllPaged(pagingQuery: PagingQuery, uri: string): Promise<PagedResponse<TResponse>>;
}
