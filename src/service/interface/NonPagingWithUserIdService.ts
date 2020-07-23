export interface NonPagingWithUserIdService<TResponse, TUserIdentifier> {
    getAll(userId: TUserIdentifier, search?: string): Promise<TResponse[]>;
}