import { PagingQuery } from "../../dto/request/query/PagingQuery";
import { PagedResponse } from "../../dto/response/PagedResponse";
export interface PagingWithUserIdentifierServiceMethod<TResponse, TUserIdentifier> {
    getAllPaged(pagingQuery: PagingQuery, userId: TUserIdentifier, uri: string): Promise<PagedResponse<TResponse>>;
}
