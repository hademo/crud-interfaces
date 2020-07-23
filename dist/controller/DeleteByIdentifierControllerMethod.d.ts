export interface DeleteByIdentifierControllerMethod<TIdentifier> {
    deleteById(id: TIdentifier): Promise<any>;
}
