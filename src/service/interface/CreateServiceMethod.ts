export interface CreateServiceMethod<TCreateRequest, TResponse> {
    create(createRequest: TCreateRequest ): Promise<TResponse>;
}