import React from 'react'
import { ImageData } from '../../../../util/types/data-types'

interface ImageTableProps {
    images: ImageData[];
    onUpdateImage: (image: ImageData) => void;
}

/**
 * Tableau contenant la liste des images.
 * @param images Liste des images. 
 */
export const ImageTableComponent: React.FC<ImageTableProps> = (props) => (
    <div className="bg-white shadow-md rounded my-6">
        <table className="text-left w-full border-collapse">
            {props.images ?
                <thead>
                    <tr>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">N°</th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Source</th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Titre</th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Thème</th>
                    </tr>
                </thead>
                : null}
            <tbody>
                {props.images ? props.images.map((image, i) => (
                    <tr className="hover:bg-grey-lighter" key={i} onClick={() => props.onUpdateImage(image)}>
                        <td className="py-4 px-6 border-b border-grey-light">{i + 1}</td>
                        <td className="py-4 px-6 border-b border-grey-light"><img className="h-48" src={image.src} /></td>
                        <td className="py-4 px-6 border-b border-grey-light">{image.title}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{image.theme.name}</td>
                    </tr>
                ))
                    : <tr className="hover:bg-grey-lighter" >
                        <td className="py-4 px-6 border-b border-grey-light">Vous n'avez pas de thèmes.</td>
                    </tr>}
            </tbody>
        </table>
    </div>
)
