import { UserData, ThemeData, GameData } from './data-types';

/**
 * Socket events enumeration.
 */
export enum SocketEvent {
    CREATE = 'create',
    JOIN = 'join',
    START = 'start',
    ANSWER = 'answer',
    ANSWER_IMAGE = 'answer-image',
    ERROR = 'error'
}

export interface CreateClientToServer {
    authorId: string;
    themeId: string;
}

export interface CreateServerToClient {
    gameId: string;
}

export interface JoinClientToServer {
    code: string;
    userId: string;
}

export interface JoinServerToClient {
    gameId: string;
}

export interface StartClientToServer {
    code: string;
    userId: string;
}

export interface StartServerToClient {
    imgBase64: string;
}

export interface AnswerClientToServer {
    code: string;
    userId: string;
    questionId: string;
    choice: string;
}

export interface AnswerServerToClient {
    correct: boolean;
    imgBase64: string;
}

export interface AnswerImageClientToServer {
    code: string;
    userId: string;
    title: string;
}

export interface AnswerImageServerToClient {
    correct: boolean;
}

export interface ErrorServerToClient {
    message: string;
}