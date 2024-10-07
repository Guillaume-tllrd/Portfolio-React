import { MapPin } from 'lucide-react';
import IconeMedia from './IconeMedia';

const Acceuil = () => {
    return (
        <>
        <div className='md:flex mx-auto dark:bg-black1 pt-10 lg:pt-0 lg:mb-6'>
            <div className='md:w-[40%] ml-8 '>
                <img className="w-full max-w-[calc(10vw+100px)] md:max-w-[calc(18vw+150px)] rounded-full mx-auto " src="./update2.jpg" alt="img-accueil" />
                    <h4 className='flex gap-1 pt-1 text-sm justify-center font-manrope xl:hidden dark:text-white'><MapPin size={18} className=' dark:text-white'/>Dijon, France</h4>
            </div>
            <div className=' lg:flex lg:flex-col lg:justify-center '>
                <h1 className='font-lato font-black text-6xl md:text-7xl mx-8 my-1 dark:text-white'>Guillaume TILLARD</h1>
                <h2 className='font-manrope ml-8 w-[380px] text-4xl text-center  py-2 xl:mx-auto bg-no-repeat bg-bottom dark:text-white' style={{ backgroundImage: "url('./souligne_jaune.png')", backgroundPosition: '2200% 105%'}}>Développeur fullstack</h2>
                <IconeMedia />
                <h4 className='xl:flex xl:gap-1 xl:justify-center xl:font-manrope hidden dark:text-white'><MapPin className='transition-transform duration-300 hover:translate-y-[-5px] dark:text-white'/>Dijon, France</h4>
            </div>
        </div>
        </>
    );
};

export default Acceuil;