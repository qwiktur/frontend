import React from 'react'
import { ImageData } from '../../../util/types/data-types'

interface ImageTableProps {
    images: ImageData[];
}

/**
 * @param images Is the list of images. 
 */
export const ImageTableComponent: React.FC<ImageTableProps> = ({ images }) => (
    <table className="min-w-full">
        {images ? <thead>
            <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">N°</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Source</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Titre</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Thème</th>
            </tr>
        </thead>
            : null}
        <tbody className="bg-white">
            {images ? images.map((image, i) => (
                <tr key={i}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{i + 1}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{image.src}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{image.title}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{image.theme}</td>
                </tr>
            ))
                : <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-green-light">Vous n'avez pas de thèmes.</div>
                    </td>
                </tr>}
        </tbody>
    </table>
)
