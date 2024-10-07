// src/components/IconeMedia.js
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import IconMessage from './IconeMessage';

const IconeMedia = () => {
    return (
        <div className="flex justify-center py-5 space-x-4">
            <a 
                href='https://github.com/Guillaume-tllrd'
                target="_blank"
                aria-label="Lien vers GitHub de Guillaume"
            > 
                <IconMessage 
                    icon={faGithub} 
                    label="GitHub" 
                    className="text-3xl dark:text-white dark:hover:text-gray-50" 
                />
            </a>
            <a 
                href='https://fr.linkedin.com/in/guillaume-tillard-71b974306'
                target="_blank"
                aria-label="Lien vers LinkedIn de Guillaume"
            >
                <IconMessage 
                    icon={faLinkedin} 
                    label="LinkedIn" 
                    className="text-3xl dark:text-white hover:text-blue-900 dark:hover:text-blue-900" 
                />
            </a>
            <a 
                href="mailto:gui.tillard@gmail.com"
                aria-label="Envoyer un email à Guillaume"
            >
                <IconMessage 
                    icon={faEnvelope} 
                    label="Email" 
                    className="text-3xl dark:text-white hover:text-red-500 dark:hover:text-red-500" 
                />
            </a>
            <a 
                href="/CV_Guillaume_TILLARD.pdf"
                download
                aria-label="Télécharger le CV de Guillaume"
            >
                <IconMessage 
                    isLucide={true} 
                    label="Télécharger CV" 
                    className="dark:text-white dark:hover:text-yellow1 hover:text-yellow1" 
                />
            </a>
        </div>
    );
};


export default IconeMedia;
