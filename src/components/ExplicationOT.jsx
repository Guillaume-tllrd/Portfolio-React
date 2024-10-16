import { faGithub } from '@fortawesome/free-brands-svg-icons';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExplicationOT = () => {
    return (
        <div className='w-full mt-4 lg:mt-0 rounded-lg bg-blanc2 dark:bg-black2 font-manrope flex flex-col'>
        <h1 className='mt-1 text-center  dark:text-white '>OnlineTraining</h1>
        <div className='h-[4px] mx-auto w-24 rounded-lg bg-yellow1 mb-2'></div>
        

                    <ul className='mx-2  2xl:mt-6'>
                <li className='dark:text-white'>- Développement d'une plateforme interne pour la formation OnlineTraining, afin de permettre aux apprenants et formateurs d'interagir efficacement.</li>
                <li className='dark:text-white'>- Conception d'un site e-commerce pour la vente de vêtements.</li>
                <li className='dark:text-white'>- Création d'une messagerie intégrée permettant aux formateurs et aux apprenants d'échanger facilement.</li>
                <li className='dark:text-white'>- Gestion des commandes après validation du panier.</li>
                <li className='dark:text-white'>- Mise en place d'un accès différencié au tableau de bord en fonction des rôles des administrateurs.</li>
                <li className='flex gap-1 dark:text-white'>- Technologies utilisées : 
                    <img className='h-6' src="/svg/php.svg" alt="PHP" />
                    <img className='h-5' src="/svg/javascript.svg" alt="JavaScript" />
                    <img className='h-6' src="/svg/mysql.svg" alt="MySQL" />
                    <img className='h-4' src="/svg/docker.svg" alt="Docker" />
                    <img className='h-4' src="/svg/tailwind.svg" alt="Tailwind CSS" />
                </li>
            </ul>

        <div className="flex justify-center mt-2 pb-4 lg:mt-auto">
                <a 
                    className="flex items-center gap-2 px-2 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    href="https://github.com/mathildejrdn/onlinetraining" 
                    target="_blank" 
                    
                    >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    Lien GitHub
                </a>
            </div>
    </div>
    );
};

export default ExplicationOT;
