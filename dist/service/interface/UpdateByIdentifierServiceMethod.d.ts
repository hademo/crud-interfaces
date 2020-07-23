export interface UpdateByIdentifierServiceMethod<TUpdateRequest, TResponse, TIdentifier> {
    updateAsync(updateRequest: TUpdateRequest, id: TIdentifier): Promise<TResponse>;
}
