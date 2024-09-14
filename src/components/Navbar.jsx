
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
        <ThemeToggleButton />
        <div className='hidden lg:flex h-16 justify-center items-center px-5 bg-white dark:bg-black1 font-manrope'>
            <ul className="flex gap-4">
                <a className="relative dark:text-white ">
                    Accueil
                </a>
                <a className=" dark:text-white relative">
                    À propos
                </a>
                <a className=" dark:text-white relative">
                    Projets
                </a>
                <a className=" dark:text-white relative">
                    Technologies
                </a>
            </ul>
            
        </div>
        
        <div className="fixed top-4 left-5 dark:text-white">
            <Menu onClick={toggleMenuBurger} size={30} className="hover:cursor-pointer transition-transform transform hover:scale-110  lg:hidden" aria-label="Toggle menu"/>
        </div>
        
        <SideNav visible={visible} toggleMenuBurger={toggleMenuBurger} />
        </>
    );
};

export default Navbar;
