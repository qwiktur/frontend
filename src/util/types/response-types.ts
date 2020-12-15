import { ErrorData, GameData, ImageData, QuestionData, ThemeData, UserData } from './data-types';

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
 * Game response data interface.
 * 
 * This API response is returned by `GET /games`.
 */
export interface GameResponse extends Response {
    games: GameData[];
}
/**
 * Image response data interface.
 * 
 * This API response is returned by `GET /images`.
 */
export interface ImageResponse extends Response {
    images: ImageData[];
}

/**
 * Quesion response data interface.
 * 
 * This API response is returned by `GET /questions`.
 */
export interface QuestionResponse extends Response {
    questions: QuestionData[];
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
 * Theme response data interface.
 * 
 * This API response is returned by `GET /themes`.
 */
export interface ThemeResponse extends Response {
    themes: ThemeData[];
}

/**
 * User informations response data interface.
 * 
 * This API response is returned by `GET /users/info`.
 */
export interface UserInfoResponse extends Response {
    user: UserData;
}

/**
 * Users informations response data interface.
 * 
 * This API response is returned by `GET /users`.
 */
export interface UsersResponse extends Response {
    users: UserData[];
}
