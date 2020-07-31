export interface UpdateWithUserIdServiceMethod<TUpdateRequest, TResponse, TIdentifier> {
    update(updateRequest: TUpdateRequest, id: TIdentifier): Promise<TResponse>
}