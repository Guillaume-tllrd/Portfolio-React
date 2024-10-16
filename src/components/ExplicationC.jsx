import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExplicationC = () => {
    return (
        <div className='w-full mt-4 lg:mt-0 rounded-lg bg-blanc2 dark:bg-black2 font-manrope flex flex-col'>
        <h1 className='mt-1 text-center  dark:text-white '>Blog de recettes de cuisine</h1>
        <div className='h-[4px] mx-auto w-48 rounded-lg bg-yellow1 mb-2'></div>
        

            <ul className='mx-2 2xl:mt-6'>
                <li className='dark:text-white'>- Développement d'une API RESTful.</li>
                <li className='dark:text-white'>- Implémentation de l'authentification utilisateur via tokens JWT pour la gestion des sessions.</li>
                <li className='dark:text-white'>- Fonctionnalité de gestion des recettes favorites par utilisateur authentifié.</li>
                <li className='dark:text-white'>- Possibilité pour les utilisateurs de commenter chaque recette.</li>
                <li className='dark:text-white'>- Utilisation de Redux pour une gestion centralisée de l'état, garantissant une navigation fluide et sans rechargement.</li>
                <li className='flex gap-1 dark:text-white'>- Technologies utilisées : 
                    <img className='h-6' src="/svg/react.svg" alt="React" />
                    <img className='h-6' src="/svg/php.svg" alt="PHP" />
                    <img className='h-6' src="/svg/mysql.svg" alt="MySQL" />
                    <img className='h-4' src="/svg/tailwind.svg" alt="Tailwind CSS" />
                    <img className='h-4' src="/svg/docker.svg" alt="Docker" />
                </li>
            </ul>
        <div className="flex justify-center mt-2 pb-4 lg:mt-auto">
                <a 
                    className="flex items-center gap-2 px-2 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    href="https://github.com/Guillaume-tllrd/reactphpRecette" 
                    target="_blank" 
                    
                    >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    Lien GitHub
                </a>
            </div>
    </div>
    
    );
};

export default ExplicationC;