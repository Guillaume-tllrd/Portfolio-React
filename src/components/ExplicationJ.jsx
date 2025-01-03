import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExplicationJ = () => {
    return (
        <div className='w-full mt-4 lg:mt-0 rounded-lg bg-blanc2 dark:bg-black2 font-manrope flex flex-col'>
        <h1 className='mt-1 text-center  dark:text-white '>Jadoo</h1>
        <div className='h-[4px] mx-auto w-11 rounded-lg bg-yellow1 mb-2'></div>

        <ul className='mx-2 2xl:mt-6'>
            <li className='dark:text-white'>- Développement d'un site vitrine pour une restaurant asiatique, mettant en valeur leurs services et offres.</li>
            <li className='dark:text-white'>-Conception d'un site One-Page responsive pour explorer et maîtriser diverses animations en CSS.</li>
            
            <li className='flex gap-1 dark:text-white'>
                -Technologies utilisées: 
                <img className='h-6' src="/svg/html5.svg" alt="logoHTML" />
                <img className='h-6' src="/svg/css3.svg" alt="logoCSS" />
                
            </li>
        </ul>
            <div className="flex justify-center mt-2 pb-4 lg:mt-auto">
            <a 
                className="flex items-center gap-2 px-2 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
                href="https://github.com/Guillaume-tllrd/JADOO" 
                target="_blank" 
                
                >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                Lien GitHub
            </a>
        </div>
    </div>
    );
};

export default ExplicationJ;