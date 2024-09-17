
import ThemeToggleButton from "./ThemeToggleButton";
import { Menu } from "lucide-react";
import { useState } from "react";
import SideNav from "./SideNav";
import { Link } from "react-scroll";



const Navbar = () => {
    const [visible, setVisible] = useState(false);

    function toggleMenuBurger() {
        setVisible(!visible);
    }

    return (
        <>
        <ThemeToggleButton />
        <nav className='hidden lg:flex h-16 justify-center items-center px-5 bg-white dark:bg-black1 font-manrope'>
            <ul className="flex gap-4">
                <Link to="acceuil" smooth={true} duration={500}  className="relative dark:text-white cursor-pointer underlined">
                    Accueil
                </Link>
                <Link to="about" smooth={true} duration={500} className=" dark:text-white relative cursor-pointer underlined">
                    À propos
                </Link>
                <Link to="projets" smooth={true} duration={500} className=" dark:text-white relative cursor-pointer underlined">
                    Projets
                </Link>
                <Link    className=" dark:text-white relative cursor-pointer underlined">
                    Technologies
                </Link>
            </ul>
            
        </nav>
        
        <div className="fixed top-4 left-5 dark:text-white z-50">
            <Menu onClick={toggleMenuBurger} size={30} className="hover:cursor-pointer  transition-transform transform hover:scale-110  lg:hidden" aria-label="Toggle menu"/>
        </div>
        <SideNav visible={visible} toggleMenuBurger={toggleMenuBurger} />
   
        </>
    );
};

export default Navbar;
