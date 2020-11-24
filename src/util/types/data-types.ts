import { timeStamp } from "console"

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
    username: string;
    password: string;
    // avatar: string;
    role: Role;
    lang: Language;
    elo: number
}

export enum Language {
    FR = 'Français', EN = 'Anglais', DE = 'Allemand'
}

export enum Role {
    USER = 'Utilisateur', MODO = 'Modérateur', ADMIN = 'Administrateur'
}
