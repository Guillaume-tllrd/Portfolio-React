import React from 'react';

const CardPhp = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2 '>
        <img className='h-10'src="/svg/php.svg" alt="logoPHP" />
        <h3 className='font-bold dark:text-white mt-1'>PHP</h3>
        <p className='text-sm px-2 text-center dark:text-white'>Solides bases en PHP procédural et création d'API .</p>
    </div>
    );
};

export default CardPhp;