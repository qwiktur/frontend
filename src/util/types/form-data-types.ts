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