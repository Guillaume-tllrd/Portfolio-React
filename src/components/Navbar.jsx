
import ThemeToggleButton from "./ThemeToggleButton";
import { Menu } from "lucide-react";
import { useState } from "react";
import SideNav from "./SideNav";

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    function toggleMenuBurger() {
        setVisible(!visible);
    }

    return (
        <>
        <div className='hidden lg:flex h-16 justify-center items-center px-5 bg-white dark:bg-black1 font-manrope'>
            <ul className="flex gap-4">
                <li className="hover:text-yellow-400 dark:text-white dark:hover:text-yellow1">
                    Accueil
                </li>
                <li className="hover:text-yellow-400 dark:text-white">
                    À propos
                </li>
                <li className="hover:text-yellow-400 dark:text-white">
                    Projets
                </li>
                <li className="hover:text-yellow-400 dark:text-white">
                    Technologies
                </li>
            </ul>
            <ThemeToggleButton />
        </div>
        <div className="mx-4 my-4 dark:text-black">
            <Menu onClick={toggleMenuBurger} className="hover:cursor-pointer transition-transform transform hover:scale-110  lg:hidden" aria-label="Toggle menu"/>
        </div>
        <SideNav visible={visible} toggleMenuBurger={toggleMenuBurger} />
        </>
    );
};

export default Navbar;
