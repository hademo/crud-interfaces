export interface UpdateWithUserIdServiceMethod<TUpdateRequest, TResponse, TUserIdentifier> {
    update(updateRequest: TUpdateRequest, userId: TUserIdentifier): Promise<TResponse>
}