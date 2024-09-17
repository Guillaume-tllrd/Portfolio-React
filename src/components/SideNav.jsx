import { X } from 'lucide-react';
import { Link } from 'react-scroll';

const SideNav = ({ toggleMenuBurger, visible }) => {
    return (
        <div className={`fixed z-50 top-0 left-0 w-64 h-full shadow-lg bg-white dark:bg-black1 transition-transform duration-500 ease-out ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={toggleMenuBurger} className='absolute top-4 right-4 text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400' aria-label="Close menu">
                <X className='w-6 h-6'/>
            </button>
            <ul className="mt-16 p-4">
                <li className="mb-4">
                <Link to="acceuil" smooth={true} duration={500} className="inline-block dark:text-white relative cursor-pointer underlined">
                        Accueil
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="about" smooth={true} duration={500} className="inline-block dark:text-white relative cursor-pointer underlined">
                        À propos
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="projets" smooth={true} duration={500} className="inline-block dark:text-white relative cursor-pointer underlined">
                        Projets
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="technologies" smooth={true} duration={500} className="inline-block dark:text-white relative cursor-pointer underlined">
                        Technologies
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
