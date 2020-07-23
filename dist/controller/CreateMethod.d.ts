export interface CreateMethod<TCreateRequest, TResponse> {
    create(createRequest: TCreateRequest): Promise<TResponse>;
}
