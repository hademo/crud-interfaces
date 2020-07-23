export interface GetOneByIdServiceMethod<TIdentifier, TResponse> {
    getOne(id: TIdentifier): Promise<TResponse>;
}