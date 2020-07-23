export interface UpdateServiceMethod<TUpdateRequest, TResponse> {
    update(updateRequest: TUpdateRequest): Promise<TResponse>
}