"use client"

import { createContext, useContext } from "react"

interface ThemeType{
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const themeContext = createContext<ThemeType | undefined>(undefined);

const useTheme = () => {
    const context = useContext(themeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
    return context
}
const ThemeProvider = ({children, theme, setTheme} :{children: React.ReactNode, theme: string, setTheme:React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export {ThemeProvider, useTheme};