import { CircleChevronDown } from 'lucide-react';
import CardFigma from './CardFigma';

const Ux = () => {
    return (
        <>
        <div className='flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 transition hover:bg-gray-100 dark:hover:bg-gray-800'>
                <h2 className='flex text-lg font-semibold text-gray-700 dark:text-white'>UX & UI</h2>
                <CircleChevronDown className='text-gray-500 dark:text-gray-300'/>
        </div>
        <CardFigma/>
        </>
    );
};

export default Ux;