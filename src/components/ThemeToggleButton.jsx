import  { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Moon, Sun, SunMoon } from 'lucide-react';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className=" bg-white border rounded-lg hover:bg-slate-100 p-1  fixed top-4 right-5"
    >
      {theme === 'light' ? <SunMoon className="h-5 w-5 active:fill-black"/> : <Sun className="h-5 w-5 active:fill-black"/>}
    </button>
  );
};

export default ThemeToggleButton;
