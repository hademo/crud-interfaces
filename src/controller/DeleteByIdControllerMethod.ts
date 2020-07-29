export interface DeleteByIdControllerMethod<TIdentifier> {
    deleteById(id: TIdentifier, req, res): Promise<any>;
}