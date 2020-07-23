import { CrudController } from "../controller/CrudController";
import { UserResponse } from "./contract/user/userResponse";
import { CreateUserRequest } from "./contract/user/createUserRequest";
import { UpdateUserRequest } from "./contract/user/updateUserRequest";

export class UserController implements CrudController<UserResponse, CreateUserRequest, UpdateUserRequest> {
    async getOne(): Promise<import("../dto/response/ApiResponse").ApiResponse<UserResponse>> {
        throw new Error("Method not implemented.");
    }

    async create(createRequest: CreateUserRequest): Promise<import("../dto/response/ApiResponse").ApiResponse<UserResponse>> {
        throw new Error("Method not implemented.");
    }

    async update(updateRequest: UpdateUserRequest): Promise<import("../dto/response/ApiResponse").ApiResponse<UserResponse>> {
        throw new Error("Method not implemented.");
    }

    async delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}