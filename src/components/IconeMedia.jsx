import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Icônes de marques
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; // Icône enveloppe
import { FileUp } from 'lucide-react';

const IconeMedia = () => {
    return (
        <div className="flex justify-center py-5 space-x-4">

            <FontAwesomeIcon icon={faGithub} className="text-3xl dark:text-white dark:hover:text-yellow1" />
            
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl dark:text-white dark:hover:text-yellow1" />
            
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl dark:text-white dark:hover:text-yellow1" />

            <FileUp size={30} className="dark:text-white dark:hover:text-yellow1" />
        </div>
    );
};

export default IconeMedia;
