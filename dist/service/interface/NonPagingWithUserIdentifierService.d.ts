export interface NonPagingWithUserIdentifierService<TResponse, TUserIdentifier> {
    getAll(userId: TUserIdentifier, search?: string): Promise<TResponse[]>;
}
