export interface DeleteByIdAndUserIdServiceMethod<TIdentifier, TUserIdentifier> {
    delete(id: TIdentifier, userId: TUserIdentifier);
}