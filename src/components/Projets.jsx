import React, { useState } from 'react';
import Swipper from './Swipper';

const Projets = () => {
    const [activeProject, setActiveProject] = useState('projet1'); 

    return (
        <div className="p-6 lg:px-20">
            <h1 className='font-archivo px-4 text-2xl md:text-3xl border-yellow1 dark:text-white'>Mes projets sélectionnés</h1>
            <div className='h-[6px] mx-4 w-24 rounded-lg bg-yellow1 mt-2'></div>

            <nav className='my-4 flex justify-center border-b'>
                <ul className="flex gap-4">
                    <li>
                        <button 
                            className={activeProject === 'projet1' ? 'nav-active' : ''} 
                            onClick={() => setActiveProject('projet1')}>
                            Projet 1
                        </button>
                    </li>
                    <li>
                        <button 
                            className={activeProject === 'projet2' ? 'nav-active' : ''} 
                            onClick={() => setActiveProject('projet2')}>
                            Projet 2
                        </button>
                    </li>
                    <li>
                        <button 
                            className={activeProject === 'projet3' ? 'nav-active' : ''} 
                            onClick={() => setActiveProject('projet3')}>
                            Projet 3
                        </button>
                    </li>
                    <li>
                        <button 
                            className={activeProject === 'projet4' ? 'nav-active' : ''} 
                            onClick={() => setActiveProject('projet3')}>
                            Projet 4 
                        </button>
                    </li>
                    <li>
                        <button 
                            className={activeProject === 'projet5' ? 'nav-active' : ''} 
                            onClick={() => setActiveProject('projet3')}>
                            Projet 5
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Affichage du projet actif */}
            <div className="lg:w-[50%] mt-4">
                {activeProject === 'projet1' && <Swipper />}
                {activeProject === 'projet2' && <div>Contenu du projet 2</div>}
                {activeProject === 'projet3' && <div>Contenu du projet 3</div>}
            </div>
        </div>
    );
};

export default Projets;
