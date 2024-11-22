import  { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import {  Sun, SunMoon } from 'lucide-react';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
  onClick={toggleTheme} 
  className="bg-white z-50 border rounded-lg hover:bg-slate-100 p-1 fixed top-4 right-5"
  aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
>
  {/* Fournit un nom accessible pour le bouton, qui sera lu par les lecteurs d'écran */}
  {theme === 'light' ? <SunMoon className="h-5 w-5 active:fill-black"/> : <Sun className="h-5 w-5 active:fill-black"/>}
</button>

  );
};

export default ThemeToggleButton;
