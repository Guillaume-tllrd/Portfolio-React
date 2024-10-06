const CardFigma = () => {
    return (
        <div className='flex flex-col w-[385px] mx-auto items-center justify-center rounded-md font-manrope h-36 bg-blanc2 dark:bg-black2'>
            <img className='h-10' src="../../svg/figma.svg" alt="logoFigma" />
            <h3 className='font-bold dark:text-white'>FIGMA</h3>
            <p className='text-sm dark:text-white'>
                J'utilise figma pour le design de mes sites.
            </p>
        </div>
    );
};

export default CardFigma;