export interface UpdateByIdServiceMethod<TUpdateRequest, TResponse, TIdentifier> {
    updateAsync(updateRequest: TUpdateRequest, id: TIdentifier): Promise<TResponse>
}