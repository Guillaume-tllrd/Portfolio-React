import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";


const Navbar = () => {
    return (
        <div className='h-16 flex justify-center items-center px-5 bg-white dark:bg-black1 font-manrope'>
            <ul className="flex gap-4">
                <li className="hover:text-yellow-400 dark:text-white dark:hover:text-yellow1">Accueil</li>
                <li className="hover:text-yellow-400 dark:text-white">A propos</li>
                <li className="hover:text-yellow-400 dark:text-white">Projets</li>
                <li className="hover:text-yellow-400 dark:text-white">Technologies</li>
            </ul>
            <ThemeToggleButton />
        </div>
    );
};

export default Navbar;
