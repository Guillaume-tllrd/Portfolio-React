import { CircleChevronDown } from 'lucide-react';
import CardReact from './CardReact';
import CardJs from './CardJs';
import CardCss from './CardCss';
import { useState } from 'react';
const Frontend = () => {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(!visible);
    }
    return (
        <>
        <div onClick={handleVisibility} className='flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 transition hover:bg-blanc2 dark:hover:bg-black2 cursor-pointer'>
                    <h2 className='flex text-lg font-semibold text-gray-700 dark:text-white'>FRONT-END</h2>
                    <CircleChevronDown  className={`text-gray-500 dark:text-gray-300 transition-transform duration-300 ${visible ? 'rotate-180' : ''}`}/>
                </div>
                
                <div className={`flex flex-wrap gap-4 overflow-hidden transition-all duration-700 ${visible ? 'max-h-[500px]' : 'max-h-0'}`}>
                <CardReact/>
                <CardJs/>
                <CardCss/>  
                </div>
                
            </>
    );
};

export default Frontend;