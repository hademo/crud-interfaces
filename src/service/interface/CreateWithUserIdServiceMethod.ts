export interface CreateWithUserIdServiceMethod<TCreateRequest, TResponse, TUserIdentifier> {
    create(createRequest: TCreateRequest, userId: TUserIdentifier): Promise<TResponse>;
}