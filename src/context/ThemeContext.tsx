import { createContext, ReactElement, useState } from 'react'

export interface ThemeContextType {

}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')



  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
