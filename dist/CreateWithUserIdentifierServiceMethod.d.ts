export interface CreateWithUserIdentifierServiceMethod<TCreateRequest, TResponse, TUserIdentifier> {
    create(createRequest: TCreateRequest, userId: TUserIdentifier): Promise<TResponse>;
}
