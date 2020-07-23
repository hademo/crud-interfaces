export interface GetOneByIdentifierServiceMethod<TIdentifier, TResponse> {
    getOne(id: TIdentifier): Promise<TResponse>;
}
