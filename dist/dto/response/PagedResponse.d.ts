export interface PagedResponse<TResponse> {
    count: number;
    totalCount: number;
    data: TResponse[];
    next: string;
    previous: string;
}
