import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/fetch-hook';
import { AddImageButton } from './image/add-image-button';
import { AddThemeButton } from './theme/add-theme-button';
import { Config } from '../../../util/config';
import { DropdownData } from './dropdown';
import { ImageData, ThemeData } from '../../../util/types/data-types';
import { ImageFormData, ThemeFormData } from '../../../util/types/form-data-types';
import { ImageModal } from './image/image-modal';
import { ImageResponse, QuestionResponse, ThemeResponse } from '../../../util/types/response-types';
import { ImageTableComponent } from './image/image-table-component';
import { QuestionTableComponent } from './question/question-table-component';
import { ThemeModal } from './theme/theme-modal';
import { ThemeTableComponent } from './theme/theme-table-component';

/**
 * Fonctionnalité "gestion des données".
 * Elle permet de gérer l'ajout, la modification et la suppression des images, des questions et des thèmes.
 */
export const DataManagementContainer: React.FC = () => {
    const [imageQueryState, imageQuery] = useFetch<ImageResponse>(`${Config.API_URL}/images`);
    const [imageUpdateQueryState, imageUpdateQuery] = useFetch(`${Config.API_URL}/images`);
    const [questionQueryState, questionQuery] = useFetch<QuestionResponse>(`${Config.API_URL}/questions`);
    const [themeQueryState, themeQuery] = useFetch<ThemeResponse>(`${Config.API_URL}/themes`);
    const [themeUpdateQueryState, themeUpdateQuery] = useFetch(`${Config.API_URL}/themes`);
    const [image, setImage] = useState<ImageData>(null);
    const [theme, setTheme] = useState<ThemeData>(null);
    const [showImageData, setShowImageData] = useState<boolean>(false);
    const [showQuestionData, setShowQuestionData] = useState<boolean>(false);
    const [showThemeData, setShowThemeData] = useState<boolean>(false);
    const [showImageModal, setShowImageModal] = useState<boolean>(false);
    const [showThemeModal, setShowThemeModal] = useState<boolean>(false);

    useEffect(() => {
        if (!imageQueryState.fetched) {
            imageQuery.get();
        }
        if (!questionQueryState.fetched) {
            questionQuery.get();
        }
        if (!themeQueryState.fetched) {
            themeQuery.get();
        }
        setShowImageData(true);
    }, []);

    useEffect(() => {
        if (themeUpdateQueryState.fetched) {
            themeUpdateQuery.get();
            handleToggleModal('theme');
        }
    }, [themeUpdateQueryState]);

    useEffect(() => {
        if (imageUpdateQueryState.fetched) {
            imageUpdateQuery.get();
            handleToggleModal('image');
        }
    }, [imageUpdateQueryState]);

    /**
     * Affiche les données grave au bouton. 
     * @param data Valeur des données à afficher
     */
    const handleToggleData = (data: string) => {
        switch (data) {
            case 'Images':
                setShowImageData(true);
                setShowQuestionData(false);
                setShowThemeData(false);
                break;
            case 'Questions':
                setShowImageData(false);
                setShowQuestionData(true);
                setShowThemeData(false);
                break;
            case 'Thèmes':
                setShowImageData(false);
                setShowQuestionData(false);
                setShowThemeData(true);
                break;
        }
    }

    /**
     * Affiche le modal d'ajout d'une donnée. 
     * @param data Valeur du modal à afficher
     */
    const handleToggleModal = (data: string) => {
        switch (data) {
            case 'image':
                if (!showImageModal) {
                    setShowImageModal(true);
                } else {
                    setShowImageModal(false);
                }
                break;
            case 'theme':
                if (!showThemeModal) {
                    setShowThemeModal(true);
                } else {
                    setShowThemeModal(false);
                }
                break;
        }
    }

    /**
     * Création ou modification d'une image.
     * @param image Objet d'une image avant sa modification.
     * @param values Objet d'une image avant sa création.
     */
    const handleImageSubmit = (image: ImageData, values: ImageFormData) => {
        const body = {
            theme: values.theme,
            title: values.title,
            src: values.src
        }

        if (image == null) {
            imageQuery.post(null, body);
            setShowImageModal(false);
        } else {
            imageQuery.patch(`${Config.API_URL}/images/${image.id}`, body);
            setShowImageModal(false);
        }
    }

    /**
     * Création ou modification d'un thème.
     * @param theme Objet d'un thème avant sa modification.
     * @param values Objet d'un thème avant sa création.
     */
    const handleThemeSubmit = (theme: ThemeData, values: ThemeFormData) => {
        const body = {
            name: values.name
        }

        if (theme == null) {
            themeQuery.post(null, body);
            setShowThemeModal(false);
        } else {
            themeQuery.patch(`${Config.API_URL}/themes/${theme.id}`, body);
            setShowThemeModal(false);
        }
    }

    /**
     * Méthode pour buffer l'image sélectionné.
     * @param image 
     */
    const handleImageSelect = (image: ImageData) => {
        setImage(image);
        setShowImageModal(true);
    }

    /**
     * Méthode pour buffer le thème sélectionné.
     * @param theme 
     */
    const handleThemeSelect = (theme: ThemeData) => {
        setTheme(theme);
        setShowThemeModal(true);
    }

    /**
    * Méthode qui supprime une image.
    * @param image Objet à supprimer.
    */
    const handleImageDelete = (image: ImageData) => {
        if (image != null) {
            imageQuery.delete(`${Config.API_URL}/images/${image.id}`);
            setShowImageModal(false);
        }
    }

    /**
    * Méthode qui supprime un thème.
    * @param theme Objet à supprimer.
    */
    const handleThemeDelete = (theme: ThemeData) => {
        if (theme != null) {
            themeQuery.delete(`${Config.API_URL}/themes/${theme.id}`);
            setShowThemeModal(false);
        }
    }

    return (
        <>
            <div className="w-2/3 mx-auto">
                <DropdownData onSetData={handleToggleData} />
                <div>
                    {showImageData ?
                        <div><AddImageButton onClick={handleToggleModal} />
                            <ImageTableComponent images={imageQueryState.fetched ? imageQueryState.data.images : []} onUpdateImage={handleImageSelect} />
                        </div> : <></>}
                </div>
                <div>
                    {showQuestionData ?
                        <QuestionTableComponent questions={questionQueryState.fetched ? questionQueryState.data.questions : []} /> : <></>}
                </div>
                <div>
                    {showThemeData ?
                        <><AddThemeButton onClick={handleToggleModal} />
                            <ThemeTableComponent themes={themeQueryState.fetched ? themeQueryState.data.themes : []} onUpdateTheme={handleThemeSelect} />
                        </> : <></>}
                </div>
            </div>
            {showImageModal ?
                <ImageModal
                    image={image}
                    show={showImageModal}
                    themes={themeQueryState.fetched ? themeQueryState.data.themes : null}
                    onDeleteTheme={handleImageDelete}
                    onHide={handleToggleModal}
                    onImageSubmit={handleImageSubmit}
                />
                : <></>}
            {showThemeModal ?
                <ThemeModal
                    show={showThemeModal}
                    theme={theme}
                    onDeleteTheme={handleThemeDelete}
                    onHide={handleToggleModal}
                    onThemeSubmit={handleThemeSubmit}
                /> : <></>}
        </>
    )
}
