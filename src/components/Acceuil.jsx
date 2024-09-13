import { MapPin } from 'lucide-react';
import React from 'react';
import IconeMedia from './IconeMedia';

const Acceuil = () => {
    return (
        <div className='md:flex mx-auto dark:bg-black1 '>
            <div className='md:w-[40%]'>
            <img 
  className="w-full max-w-[170px] md:max-w-[190px] lg:max-w-[300px] xl:max-w-[450px] 2xl:max-w-[450px] rounded-full mx-auto mb-4" 
  src="./update2.jpg" 
  alt="photo" 
/>

                <h4 className='flex gap-1 justify-center font-manrope xl:hidden dark:text-white'><MapPin className='dark:text-white'/>Dijon, France</h4>
            </div>
            <div className='lg:flex lg:flex-col lg:justify-center'>
                <h1 className='font-playfair  font-black text-6xl md:text-7xl mx-8 my-1 dark:text-white'>Guillaume TILLARD</h1>
                <h3 className='font-manrope ml-8 w-[380px] text-4xl  py-2 xl:mx-auto bg-no-repeat bg-bottom dark:text-white' style={{ backgroundImage: "url('./souligne_jaune.png')", backgroundPosition: '2200% 105%'}}>Développeur fullstack</h3>
                <IconeMedia />
                <h4 className='xl:flex xl:gap-1 xl:justify-center xl:font-manrope hidden dark:text-white'><MapPin className='transition-transform duration-300 hover:translate-y-[-5px] dark:text-white'/>Dijon, France</h4>
            </div>
            
        </div>
    );
};

export default Acceuil;