import { CircleChevronDown } from 'lucide-react';
import CardFigma from './CardFigma';
import { useState } from 'react';

const Ux = () => {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(!visible);
    }
    return (
        <>
            <div 
                onClick={handleVisibility} 
                className='flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 transition hover:bg-blanc2 dark:hover:bg-black2 cursor-pointer'
            >
                <h2 className='flex text-lg font-semibold text-gray-700 dark:text-white'>
                    UX & UI
                </h2>
                <CircleChevronDown 
                    className={`text-gray-500 dark:text-gray-300 transition-transform duration-300 ${visible ? 'rotate-180' : ''}`}
                    // pour la rotation de la flèche on utilise rotate-180 
                />
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${visible ? 'max-h-40' : 'max-h-0'}`}>
                <CardFigma />
            </div>
        </>
    );
};

export default Ux;