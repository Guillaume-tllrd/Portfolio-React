import { useState } from 'react';
import SwipperJadoo from './SwipperJadoo';
import ExplicationJ from './ExplicationJ';
import SwipperCuisine from './SwipperCuisine';
import ExplicationC from './ExplicationC';
import SwipperTL from './SwipperTL';
import ExplicationTL from './ExplicationTL';
import SwipperAV from './SwipperAV';
import ExplicationAV from './ExplicationAV';
import SwipperOT from './SwipperOT';
import ExplicationOT from './ExplicationOT';

const Projets = () => {
    const [activeProject, setActiveProject] = useState('projet1'); 

    return (
        <div className="px-6 pb-6 lg:px-20 lg:pb-8">
            <h1 className='font-archivo px-4 text-xl sm:text2xl md:text-3xl border-yellow1 dark:text-white'>Mes projets sélectionnés</h1>
            <div className='h-[6px] mx-4 w-24 rounded-lg bg-yellow1 mt-2'></div>

            <nav className='px-2 my-4 flex flex-wrap justify-center items-center font-manrope'>
                <ul className="flex flex-wrap gap-4 max-w-[380px] justify-center items-center custom425:border-b ">
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
            <div className="lg:grid grid-cols-2 gap-4 mt-4">
                {activeProject === 'projet1' &&   <>
                    <SwipperCuisine />
                    <ExplicationC />
                </>}
                {activeProject === 'projet2' && 
                    <>
                    <SwipperOT/>
                    <ExplicationOT/>
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
                {activeProject === 'projet5' && <>
                    <SwipperJadoo />
                    <ExplicationJ />
                </>}
            </div>
        </div>
    );
};

export default Projets;
