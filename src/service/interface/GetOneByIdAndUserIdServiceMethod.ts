export interface GetOneByIdAndUserIdServiceMethod<TResponse, TIdentifier, TUserIdentifier> {
    getOne(id: TIdentifier, userId: TUserIdentifier): Promise<TResponse>;
}