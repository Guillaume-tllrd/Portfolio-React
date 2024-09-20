import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='h-20 bg-blanc2 dark:bg-black flex flex-col items-center  relative'>
            <Link className='relative flex items-center justify-center -top-6 w-12 h-12 bg-yellow-400 cursor-pointer hover:bg-yellow-300' to="navbar" smooth={true} duration={500}><ArrowUp className='cursor-pointer' size={30}/></Link>
            <p className='text-sm dark:text-white'>Guillaume TILLARD <span>&copy; 2024</span></p>
        </div>
    );
};

export default Footer;
