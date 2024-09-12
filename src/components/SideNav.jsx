import { X } from 'lucide-react';
import React from 'react';
import {  } from 'react-router-dom';

const SideNav = ({ toggleMenuBurger, visible }) => {
    return (
        <div className={`fixed top-0 left-0 w-64 h-full shadow-lg bg-white dark:bg-black1 transition-transform duration-500 ease-out ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={toggleMenuBurger} className='absolute top-4 right-4 text-black hover:text-gray-400 dark:text-white dark:hover:text-gray-400' aria-label="Close menu">
                <X className='w-6 h-6'/>
            </button>
            <ul className="mt-16 p-4">
                <li className="mb-4 dark:text-white">
                      Accueil
                </li>
                <li className="mb-4 dark:text-white">
                     À propos
                </li>
                <li className="mb-4 dark:text-white">
                     Projets
                </li>
                <li className="mb-4 dark:text-white">
                      Technologies
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
