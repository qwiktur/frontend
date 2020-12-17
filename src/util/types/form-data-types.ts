import { ChoiceData} from "./data-types";

/**
 * Objet utilisé pour le formulaire d'ajout de choix de réponse aux question.
 */
export interface ChoiceFormData {
    label: string;
    correct: boolean;
}
/**
 * Objet utilisé pour le formulaire d'ajout/modification d'une question.
 */
export interface QuestionFormData {
    title: string;
    theme: string;
    choices: ChoiceData[];
}
/**
 * Objet utilisé pour le formulaire de d'ajout d'une image.
 */
export interface ImageFormData {
    theme: string,
    title: string;
    src: string;
}

/**
 * Objet utilisé pour le formulaire de d'ajout d'un thème.
 */
export interface ThemeFormData {
    name: string,
}

/**
 * Objet utilisé pour le formulaire de connection.
 */
export interface SignInFormValues {
    email: string;
    password: string;
}