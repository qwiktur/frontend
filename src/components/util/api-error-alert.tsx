import React from 'react';
import { ErrorData } from '../../util/types/data-types';

interface APIErrorAlertProps {
    title?: string;
    errors: ErrorData[];
}

/**
 * API error alert component.
 * 
 * This component is used to show API errors when a request fails.
 * 
 * @param props Properties
 */
const APIErrorAlert: React.FC<APIErrorAlertProps> = (props) => {
    const errorElements = props.errors.map((error, index) => (<div key={index}>{error.error_description}</div>));
    return (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{props.title != null ? props.title : null}</b> {errorElements}
            </span>
        </div>
    );
};

APIErrorAlert.defaultProps = {
    title: null
};

export default APIErrorAlert;
