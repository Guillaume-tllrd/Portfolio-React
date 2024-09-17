import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExplicationTL = () => {
    return (
        <div className='w-full mt-4 lg:mt-0 rounded-lg bg-blanc2 dark:bg-black2 font-manrope flex flex-col'> 
        {/* je met en flex pour mettre le btn github en mt-auto */}
    <h1 className='mt-1 text-center dark:text-white '>ToysLand</h1>
    <div className='h-[4px] mx-auto w-[58px] rounded-lg bg-yellow1 mb-2'></div>

    <ul className='mx-2 2xl:mt-6'>
        <li className='dark:text-white'>- Conception d'un site e-commerce pour la vente de jouets.</li>
        <li className='dark:text-white'>- Implémentation de l'authentification utilisateur à l'aide de sessions PHP.</li>
        <li className='dark:text-white'>- Gestion complète des produits via le tableau de bord administrateur.</li>
        <li className='dark:text-white'>- Développement d'un système de tri des produits basé sur les critères de recherche des utilisateurs pour améliorer la pertinence des résultats affichés.</li>
       
        <li className='flex gap-1 dark:text-white'>- Technologies utilisées : 
            <img className='h-6' src="../../svg/php.svg" alt="PHP" />
            <img className='h-6' src="../../svg/mysql.svg" alt="MySQL" />
            <img className='h-4' src="../../svg/docker.svg" alt="Docker" />
        </li>
    </ul>

    <div className="flex justify-center mt-2 lg:mt-auto pb-4">
        <a 
            className="flex items-center gap-2 px-2 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
            href="https://github.com" 
            target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            Lien GitHub
        </a>
    </div>
</div>

    );
};

export default ExplicationTL; 