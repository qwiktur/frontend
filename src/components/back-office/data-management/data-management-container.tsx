import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/fetch-hook';
import { Config } from '../../../util/config';
import { DropdownData } from './dropdown';
import { ImageData, ThemeData } from '../../../util/types/data-types';
import { ImageFormData, ThemeFormData } from '../../../util/types/form-data-types';
import { ImageModal } from './image/image-modal';
import { ImageResponse, QuestionResponse, ThemesResponse } from '../../../util/types/response-types';
import { ImageTableComponent } from './image/image-table-component';
import { QuestionTableComponent } from './question/question-table-component';
import { ThemeModal } from './theme/theme-modal';
import { ThemeTableComponent } from './theme/theme-table-component';
import { SearchBarComponent } from '../../common/searchbar-component';
import { ButtonComponent } from '../../common/button';
import { FilterThemeComponent } from '../../common/filter-theme-component';
import _ from 'lodash';

/**
 * Fonctionnalité "gestion des données".
 * Elle permet de gérer l'ajout, la modification et la suppression des images, des questions et des thèmes.
 */
export const DataManagementContainer: React.FC = () => {
    const [imageQueryState, imageQuery] = useFetch<ImageResponse>(`${Config.API_URL}/images`);
    const [imageUpdateQueryState, imageUpdateQuery] = useFetch(`${Config.API_URL}/images`);
    const [questionQueryState, questionQuery] = useFetch<QuestionResponse>(`${Config.API_URL}/questions`);
    const [themeQueryState, themeQuery] = useFetch<ThemesResponse>(`${Config.API_URL}/themes`);
    const [themeUpdateQueryState, themeUpdateQuery] = useFetch(`${Config.API_URL}/themes`);
    const [image, setImage] = useState<ImageData>(null);
    const [theme, setTheme] = useState<ThemeData>(null);
    // const [search, setSearch] = useState('');
    const [showImageData, setShowImageData] = useState<boolean>(false);
    const [showQuestionData, setShowQuestionData] = useState<boolean>(false);
    const [showThemeData, setShowThemeData] = useState<boolean>(false);
    const [showImageModal, setShowImageModal] = useState<boolean>(false);
    const [showThemeModal, setShowThemeModal] = useState<boolean>(false);
    // const [filterTheme, setFilterTheme] = useState<string>('');

    // Fetch toutes les images.
    useEffect(() => {
        if (!imageQueryState.fetched) {
            imageQuery.get();
        }
        setShowImageData(true);
    }, []);

    // Fetch toutes les questions.
    useEffect(() => {
        if (!questionQueryState.fetched) {
            questionQuery.get();
        }
    }, []);

    // Fetch tous les thèmes.
    useEffect(() => {
        if (!themeQueryState.fetched) {
            themeQuery.get();
        }
    }, []);


    useEffect(() => {
        if (themeUpdateQueryState.fetched) {
            themeUpdateQuery.get();
        }
    }, [themeUpdateQueryState]);

    useEffect(() => {
        if (imageUpdateQueryState.fetched) {
            imageUpdateQuery.get();
        }
    }, [imageUpdateQueryState]);

    /**
     * Méthode pour buffer la recherche d'élément.
     * @param value  search
     */
    // const handleOnSearch = (value: string) => {

    //     setFilterTheme('');
    //     setSearch(value);
    // }

    /**
     * Méthode pour filtrer sur un thème.
     * @param value Thème sélectionné.
     */
    // const handleFilterTheme = (theme: string) => {
    //     setSearch('');
    //     setFilterTheme(theme);
    // }

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
        // setSearch('');
    }

    const handleShowImageModal = () => {
        if (!showImageModal) {
            setShowImageModal(true);
        } else {
            setShowImageModal(false);
        }
    }

    const handleShowThemeModal = () => {
        if (!showThemeModal) {
            setShowThemeModal(true);
        } else {
            setShowThemeModal(false);
        }
    }

    /**
     * Création ou modification d'une image.
     * @param image Objet d'une image avant sa modification.
     * @param values Objet d'une image avant sa création.
     */
    const handleImageSubmit = (image: ImageData, values: ImageFormData) => {
        // setSearch('');
        const body = {
            theme: values.theme,
            title: values.title,
            src: values.src
        }

        if (image == null) {
            imageQuery.post(null, body);
            setShowImageModal(false);
            imageQuery.get();
        } else {
            imageQuery.patch(`${Config.API_URL}/images/${image.id}`, body);
            setShowImageModal(false);
            imageQuery.get();
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
            themeQuery.get();
        } else {
            themeQuery.patch(`${Config.API_URL}/themes/${theme.id}`, body);
            setShowThemeModal(false);
            themeQuery.get();
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
            imageQuery.get();
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
            themeQuery.get();
            setShowThemeModal(false);
        }
    }

    return (
        <>
            <div className="w-2/3 mx-auto mt-10">
                <DropdownData onSetData={handleToggleData} />
                <div className="bg-gray-200 rounded-lg p-5">
                    {showImageData ?
                        <div >
                            {/* <label>Filtre:</label>
                            <div className="flex justify-center">
                                <FilterThemeComponent filter={handleFilterTheme} themes={themeQueryState.fetched ? _.orderBy(themeQueryState.data.themes, [theme => theme.name.toLocaleLowerCase()], ['asc']) : []} />
                                <SearchBarComponent onSearch={handleOnSearch} />
                            </div> */}
                            <ButtonComponent value="Ajouter une image" onClick={handleShowImageModal} />
                            <ImageTableComponent images={imageQueryState.fetched ? imageQueryState.data.images : []} onUpdateImage={handleImageSelect} />
                            {/* <ImageTableComponent images={imageQueryState.fetched ? imageQueryState.data.images.filter(image => image.theme.name.includes(filterTheme) || image.title.includes(search) ) : []} onUpdateImage={handleImageSelect} /> */}
                        </div> : <></>}
                    {showQuestionData ?
                        <QuestionTableComponent questions={questionQueryState.fetched ? questionQueryState.data.questions : []} />
                        : <></>}
                    {showThemeData ?
                        <>
                            <ButtonComponent value="Ajouter un thème" onClick={handleShowThemeModal} />
                            <ThemeTableComponent themes={themeQueryState.fetched ? themeQueryState.data.themes : []} onUpdateTheme={handleThemeSelect} />
                        </> : <></>}
                </div>
            </div>
            {showImageModal ?
                <ImageModal
                    image={image}
                    show={showImageModal}
                    themes={themeQueryState.fetched ? themeQueryState.data.themes : null}
                    onDeleteImage={handleImageDelete}
                    onHide={handleShowImageModal}
                    onImageSubmit={handleImageSubmit}
                />
                : <></>}
            {showThemeModal ?
                <ThemeModal
                    show={showThemeModal}
                    theme={theme}
                    onDeleteTheme={handleThemeDelete}
                    onHide={handleShowThemeModal}
                    onThemeSubmit={handleThemeSubmit}
                /> : <></>}
        </>
    )
}
