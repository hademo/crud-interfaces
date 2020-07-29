
export interface CrudService<TResponse, TCreateRequest, TUpdateRequest, TIdentifier> {
    create(createRequest: TCreateRequest): Promise<TResponse>;

    update(updateRequest: TUpdateRequest, id: TIdentifier): Promise<TResponse>;

    delete(id: TIdentifier);

    getOne(id: TIdentifier): Promise<TResponse>;
}