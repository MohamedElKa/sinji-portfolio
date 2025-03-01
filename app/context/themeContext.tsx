"use client"

import { createContext, useContext } from "react"

interface ThemeType{
    theme: string,
    setTheme: (theme: string) => void;
}
const themeContext = createContext<ThemeType | undefined>(undefined);

const useTheme = () => {
    return useContext(themeContext)
}
const ThemeProvider = ({children, theme, setTheme} :{children: React.ReactNode, theme: string, setTheme: () => void}) => {
    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export {ThemeProvider, useTheme};