import React, { useState } from 'react';

import SwipperJadoo from './SwipperJadoo';
import ExplicationJ from './ExplicationJ';
import SwipperCuisine from './SwipperCuisine';
import ExplicationC from './ExplicationC';
import SwipperTL from './SwipperTL';
import ExplicationTL from './ExplicationTL';
import SwipperAV from './SwipperAV';
import ExplicationAV from './ExplicationAV';

const Projets = () => {
    const [activeProject, setActiveProject] = useState('projet1'); 

    return (
        <div className="p-6 lg:px-20">
            <h1 className='font-archivo px-4 text-2xl md:text-3xl border-yellow1 dark:text-white'>Mes projets sélectionnés</h1>
            <div className='h-[6px] mx-4 w-24 rounded-lg bg-yellow1 mt-2'></div>

            <nav className='px-2 my-4 mx-auto w-[380px] border-b '>
                <ul className="flex gap-4 justify-center items-center">
                    <li>
                    <button 
                            className={`${activeProject === 'projet1' ? 'nav-active' : ''} dark:text-white`}
                            onClick={() => setActiveProject('projet1')}>
                            Projet 1
                        </button>

                    </li>
                    <li className=''>
                        <button 
                            className={`${activeProject === 'projet2' ? 'nav-active' : ''} dark:text-white `} 
                            onClick={() => setActiveProject('projet2')}>
                            Projet 2
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`${activeProject === 'projet3' ? 'nav-active' : ''} dark:text-white`}
                            onClick={() => setActiveProject('projet3')}>
                            Projet 3
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`${activeProject === 'projet4' ? 'nav-active' : ''} dark:text-white`}
                            onClick={() => setActiveProject('projet4')}>
                            Projet 4 
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`${activeProject === 'projet5' ? 'nav-active' : ''} dark:text-white`}
                            onClick={() => setActiveProject('projet5')}>
                            Projet 5
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Affichage du projet actif */}
            <div className="lg:grid grid-cols-2  mt-4">
                {activeProject === 'projet1' &&   <>
                    <SwipperCuisine />
                    <ExplicationC />
                </>}
                {activeProject === 'projet2' && 
                    <>
                <SwipperJadoo />
                <ExplicationJ />
                    </>
                }
                {activeProject === 'projet3' && <>
                    <SwipperTL/>
                    <ExplicationTL/>
                </>
                }
                {activeProject === 'projet4' && <>
                    <SwipperAV/>
                    <ExplicationAV/>
                </>}
            </div>
        </div>
    );
};

export default Projets;
