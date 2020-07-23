export interface CrudWithUserIdService<TResponse, TCreateRequest, TUpdateRequest, TIdentifier, TUserIdentifier> {
    create(createRequest: TCreateRequest, userId: TUserIdentifier): Promise<TResponse>;
    update(updateRequest: TUpdateRequest, userId: TUserIdentifier, id: TIdentifier): Promise<TResponse>;
    delete(id: TIdentifier, userId: TUserIdentifier);
    getOne(id: TIdentifier, userId: TUserIdentifier): Promise<TResponse>
}