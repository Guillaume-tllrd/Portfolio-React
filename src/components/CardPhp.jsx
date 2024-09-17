import React from 'react';

const CardPhp = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center flex-grow rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2 '>
        <img className='h-10'src="../../svg/php.svg" alt="" />
        <h3 className='font-bold dark:text-white'>PHP</h3>
        <p className='text-sm dark:text-white'>J'ai des bases en procédural et conception d'API.</p>
    </div>
    );
};

export default CardPhp;