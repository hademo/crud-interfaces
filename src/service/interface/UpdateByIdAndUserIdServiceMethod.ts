export interface UpdateByIdAndUserIdServiceMethod<TUpdateRequest, TResponse, TIdentifier, TUserIdentifier> {
    updateAsync(updateRequest: TUpdateRequest, id: TIdentifier, userId: TUserIdentifier): Promise<TResponse>
}