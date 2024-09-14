import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FileUp } from 'lucide-react';
import { useState } from 'react';

const IconMessage = ({ icon, label, isLucide = false, size = 30, className }) => {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="relative">
            {/* Si c'est une icône Lucide, on affiche FileUp */}
            {isLucide ? (
                <FileUp
                    className={`${className} transition-transform duration-300 hover:translate-y-[-12px]`}
                    size={size}
                    onMouseEnter={() => setShowMessage(true)}
                    onMouseLeave={() => setShowMessage(false)}
                />
            ) : (
                <FontAwesomeIcon
                    icon={icon}
                    className={`${className} transition-transform duration-300 hover:translate-y-[-12px]`}
                    onMouseEnter={() => setShowMessage(true)}
                    onMouseLeave={() => setShowMessage(false)}
                />
            )}

            {/* Message au survol */}
            {showMessage && (
                <div className="absolute bottom-10 mb-2 left-1/2 text-center transition-transform transform -translate-x-1/2 p-2 bg-white text-black text-xs rounded shadow-lg">
                    {label}
                </div>
            )}
        </div>
    );
};

export default IconMessage;
