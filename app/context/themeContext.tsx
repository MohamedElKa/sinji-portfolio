"use client"

import { createContext, useContext } from "react"

const themeContext = createContext();

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