import React from 'react';

const CardDocker = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2 '>
        <img className='h-8'src="/svg/docker.svg" alt="logoDocker" />
        <h3 className='font-bold dark:text-white'>Docker</h3>
        <p className='text-sm dark:text-white'>Pour la gestion des environnements de mes projets.</p>
    </div>
    );
};

export default CardDocker;