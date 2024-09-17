import { CircleChevronDown } from 'lucide-react';
import Ux from './Ux';
import Frontend from './Frontend';
import Backend from './Backend';

const Technologies = () => {
    return (
        <div className="p-6 lg:px-20">
            <h1 className='font-archivo px-4 text-2xl md:text-3xl border-yellow1 dark:text-white'>Technologies</h1>
            <div className='h-[6px] mx-4 w-24 rounded-lg bg-yellow1 mt-2'></div>
            <div className='space-y-4 my-4'>
                <Ux/>
                <Frontend/>
                <Backend />
            </div>
        </div>
    );
};

export default Technologies;