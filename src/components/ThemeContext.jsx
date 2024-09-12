import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        // On a joute ou on supprime le mode dark en fonction du theme 
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme); // Sauvegarder le thème dans localStorage
    }, [theme]);

    function toggleTheme(){
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const value = {
        theme: theme,
        toggleTheme: toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
};
