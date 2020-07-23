export interface CrudWithUserIdentifierService<TResponse, TCreateRequest, TUpdateRequest, TIdentifier, TUserIdentifier> {
    create(createRequest: TCreateRequest, userId: TUserIdentifier): Promise<TResponse>;
    update(updateRequest: TUpdateRequest, userId: TUserIdentifier, id: TIdentifier): Promise<TResponse>;
    delete(id: TIdentifier, userId: TUserIdentifier): any;
    getOne(id: TIdentifier, userId: TUserIdentifier): Promise<TResponse>;
}
