export interface DeleteByIdControllerMethod<TIdentifier> {
    deleteById(id: TIdentifier): Promise<any>;
}
