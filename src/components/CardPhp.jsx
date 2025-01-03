import React from 'react';

const CardPhp = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2 '>
            <div className='flex gap-2'>
        <img className='h-12'src="/svg/php.svg" alt="logoPHP" />
        <img className='h-10'src="/svg/symfony.svg" alt="logoSymfony" />
        </div>
        <h3 className='font-bold dark:text-white mt-1'>PHP & Symfony</h3>
        <p className='text-sm px-2 text-center dark:text-white'>Solides bases en procédural, orienté objet et création d'API .</p>
    </div>
    );
};

export default CardPhp;