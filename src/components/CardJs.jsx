import React from 'react';

const CardJs = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2'>
        <img className='h-10'src="/svg/javascript.svg" alt="logoJS" />
        <h3 className='font-bold dark:text-white mt-1'>Javascript</h3>
        <p className='text-center px-2 text-sm dark:text-white'>L'interactivité est au cœur de mes applications web.</p>
    </div>
);

};

export default CardJs;