import React from 'react';

const CardReact = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2 '>
            <div className='flex gap-2'>
        <img className='h-10'src="/svg/react.svg" alt="logoREACT" />
        <img className='h-10'src="/svg/redux.svg" alt="logoREDUX" />
            </div>
        
        <h3 className='font-bold dark:text-white mt-1'>React & Redux</h3>
        <p className='text-center px-2 text-sm dark:text-white'>Pour une navigation fluide et sans rechargement de la page.</p>
    </div>
    );
};

export default CardReact;