export interface CrudService<TResponse, TCreateRequest, TUpdateRequest, TIdentifier> {
    createAsync(createRequest: TCreateRequest): Promise<TResponse>;
    updateAsync(updateRequest: TUpdateRequest, id: TIdentifier): Promise<TResponse>;
    deleteAsync(id: TIdentifier): Promise<TResponse>;
    getOneAsync(id: TIdentifier): Promise<TResponse>;
}
