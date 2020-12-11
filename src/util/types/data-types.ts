/**
 * Timestamps interface.
 * 
 * This interface is used with data interfaces that have timestamps by extending this.
 */
interface TimeStamps {
    createdAt: string;
    updatedAt: string;
}

/**
 * Game data interface.
 */
export interface GameData extends TimeStamps {
    id: string;
    theme: ThemeData;
    players: UserData[];
    questions: [{
        target: QuestionData;
        history: [{
            user: UserData;
            time: number;
            correct: boolean;
        }]
    }]
}

/**
 * Image data interface.
 */
export interface ImageData extends TimeStamps {
    id: string;
    src: string;
    title: string;
    theme: ThemeData;
}

/**
 * Question data interface.
 */
export interface QuestionData extends TimeStamps {
    id: string;
    theme: ThemeData;
    title: string;
    choices: {
        label: string;
        correct: boolean;
    }
}

/**
 * Theme data interface.
 */
export interface ThemeData extends TimeStamps {
    id: string;
    name: string;
}

/**
 * User data interface.
 */
export interface UserData extends TimeStamps {
    id: string;
    email: string;
    username: string;
    password: string;
    // avatar: string;
    role: Role;
    lang: Language;
    elo: number
}

/**
 * Error data interface.
 */
export interface ErrorData {
    error: ErrorCode;
    error_description: string;
}

export enum Language {
    FR = 'Français', EN = 'English', DE = 'Deutsch'
}

export enum Role {
    USER = 'user', MODO = 'modo', ADMIN = 'admin'
}

/**
 * Error code type.
 */
export type ErrorCode =
      'access_denied'
    | 'invalid_client'
    | 'invalid_grant'
    | 'invalid_request'
    | 'invalid_scope'
    | 'network_error'
    | 'not_found'
    | 'server_error'
    | 'temporarily_unavailable'
    | 'unauthorized_client'
    | 'unsupported_grant_type'
    | 'unsupported_response_type'
    | 'validation_failed';
