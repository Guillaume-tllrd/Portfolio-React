import { MapPin } from 'lucide-react';
import React from 'react';
import IconeMedia from './IconeMedia';

const Acceuil = () => {
    return (
        <div className='lg:flex dark:bg-black1'>
            <div className=''>
                <img className='h-[180px] rounded-full mx-auto mt-6 mb-4' src="./updatedpictures.png" alt="photo" />
                <h4 className='flex gap-1 justify-center font-manrope dark:text-white'><MapPin className='dark:text-white'/>Dijon, France</h4>
            </div>
            <div>
                <h1 className='font-playfair  font-black text-6xl mx-8 my-1 dark:text-white'>Guillaume <br />TILLARD</h1>
                <h3 className='font-manrope ml-8 w-[380px] text-4xl py-2 bg-no-repeat  bg-bottom dark:text-white' style={{ backgroundImage: "url('./souligne_jaune.png')", backgroundPosition: '2200% 105%'}}>Développeur fullstack</h3>
                <IconeMedia />
            </div>
            
        </div>
    );
};

export default Acceuil;