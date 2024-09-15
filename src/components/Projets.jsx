import React from 'react';
import Swipper from './Swipper';


const Projets = () => {
    return (
        <div className="p-6 lg:px-20">
            <h1 className='font-archivo px-4 text-3xl  border-yellow1 dark:text-white'>Mes projets</h1>
            <div className='h-[6px] mx-4 w-24 rounded-lg bg-yellow1 mt-2'></div>
            <div className='lg:w-[50%]'>
                <Swipper/>
            </div>
        </div>
    );
};

export default Projets;