export interface GetOneByIdentifierAndUserIdentifierServiceMethod<TResponse, TIdentifier, TUserIdentifier> {
    getOne(id: TIdentifier, userId: TUserIdentifier): Promise<TResponse>;
}
