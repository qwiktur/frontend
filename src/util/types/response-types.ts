import { ErrorData, ThemeData, UserData } from './data-types';

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
 * User informations response data interface.
 * 
 * This API response is returned by `GET /users/userinfo`.
 */
export interface UserInfoResponse extends Response {
    user: UserData;
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
 * Create game response data interface.
 * 
 * This API response is returned by `POST /games`.
 */
export interface CreateGameResponse extends Response {
    id: string;
}

/**
 * Get themes response data interface.
 * 
 * This API response is returned by `POST /games`.
 */
export interface GetThemesResponse extends Response {
    themes: ThemeData[]
}

