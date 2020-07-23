export interface UpdateByIdentiferServiceMethod<TUpdateRequest, TResponse, TIdentifier> {
    updateAsync(updateRequest: TUpdateRequest, id: TIdentifier): Promise<TResponse>;
}
