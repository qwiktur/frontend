import React, { useEffect } from 'react'
import useFetch from '../../../hooks/fetch-hook';
import { Config } from '../../../util/config';
import { ImageResponse, QuestionResponse, ThemeResponse } from '../../../util/types/response-types';
import { ImageTableComponent } from './image-table-component';
import { QuestionTableComponent } from './question-table-component';
import { ThemeTableComponent } from './theme-table-component';

export const DataManagementContainer: React.FC = () => {
    const [imageQueryState, imagesQuery] = useFetch<ImageResponse>(`${Config.API_URL}/images`);
    const [questionQueryState, questionQuery] = useFetch<QuestionResponse>(`${Config.API_URL}/questions`);
    const [themeQueryState, themeQuery] = useFetch<ThemeResponse>(`${Config.API_URL}/themes`);

    useEffect(() => {
        if (!imageQueryState.fetched) {
            imagesQuery.get();
        }
        if (!questionQueryState.fetched) {
            questionQuery.get();
        }
        if (!themeQueryState.fetched) {
            themeQuery.get();
        }
    }, []);

    return (
        <div>
            <ThemeTableComponent themes={themeQueryState.fetched ? themeQueryState.data.themes : []} />
            <ImageTableComponent images={imageQueryState.fetched ? imageQueryState.data.images : []} />
            <QuestionTableComponent questions={questionQueryState.fetched ? questionQueryState.data.questions : []} />
        </div>
    )
}
