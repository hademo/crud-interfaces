export interface NonPagingService<TResponse> {
    getAll(search?: string): Promise<TResponse[]>;
}