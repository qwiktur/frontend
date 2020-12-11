import { ErrorData, UserData } from './data-types';

/**
 * Base API response data interface.
 */
export interface Response {
    [key: string]: unknown;
}

/**
 * Error response data interface.
 * 
 * This API response is returned when any errors occurs.
 */
export interface ErrorResponse extends Response {
    errors: ErrorData[];
}

/**
 * Signin response data interface.
 * 
 * This API response is returned by `POST /auth/signin`.
 */
export interface SignInResponse extends Response {
    accessToken: string;
    refresh_token: string;
}

/**
 * Signup response data interface.
 * 
 * This API response is returned by `POST /auth/signup`.
 */
export interface SignUpResponse extends Response {
    accessToken: string;
    refresh_token: string;
}

/**
 * User informations response data interface.
 * 
 * This API response is returned by `GET /users/userinfo`.
 */
export interface UserInfoResponse extends Response {
    user: UserData;
}

/**
 * User informations response data interface.
 * 
 * This API response is returned by `GET /users/userinfo`.
 */
export interface UsersResponse extends Response {
    users: UserData[];
}
