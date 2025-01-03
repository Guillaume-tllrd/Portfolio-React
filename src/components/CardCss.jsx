import React from 'react';

const CardCss = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2 '>
            <div className='flex gap-2'>
        <img className='h-10'src="../../svg/css3.svg" alt="logoCSS" />
        <img className='h-7'src="../../svg/tailwind.svg" alt="logoTailwind" />
        <img className='h-10'src="../../svg/sass.svg" alt="logoSass" />
        <img className='h-10'src="../../svg/bootstrap.svg" alt="logoBootstrap" />
            </div>
        
        <h3 className='font-bold dark:text-white mt-1'>CSS, Tailwind, SASS & Bootstrap</h3>
        <p className='text-sm dark:text-white'>Pour styliser mes applications.</p>
    </div>
    );
};

export default CardCss;