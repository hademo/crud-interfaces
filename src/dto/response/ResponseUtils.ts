import { ApiResponse } from '../..';

export class ResponseUtils {
    static ok<T>(data: T, message?: string): ApiResponse<T> {
        return {
            status: 200,
            data: data,
            message
        };
    }

    static badRequest<T>(data: T, message?: string): ApiResponse<T> {
        return {
            status: 400,
            data: data,
            message
        };
    }

    static noContent(): ApiResponse<null> {
        return {
            status: 204,
            data: null,
            message: null
        };
    }

    static forbidden<T>(message: string, data?: T): ApiResponse<T> {
        return {
            status: 403,
            data: data,
            message: message
        };
    }
}