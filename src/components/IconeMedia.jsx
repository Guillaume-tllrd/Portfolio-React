// src/components/IconeMedia.js
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import IconMessage from './IconeMessage';

const IconeMedia = () => {
    return (
        <div className="flex justify-center py-5 space-x-4">
            <IconMessage 
                icon={faGithub} 
                label="GitHub" 
                className="text-3xl dark:text-white dark:hover:text-gray-50" 
            />
            <IconMessage 
                icon={faLinkedin} 
                label="LinkedIn" 
                className="text-3xl dark:text-white hover:text-blue-900 dark:hover:text-blue-900" 
            />
            <IconMessage 
                icon={faEnvelope} 
                label="Email" 
                className="text-3xl dark:text-white hover:text-red-500 dark:hover:text-red-500" 
            />
            {/* Utilisation de l'icône Lucide React */}
            <IconMessage 
                isLucide={true} 
                label="Télécharger CV" 
                className="dark:text-white dark:hover:text-yellow1 hover:text-yellow1" 
            />
        </div>
    );
};

export default IconeMedia;
