import { createContext, ReactElement, useEffect, useState } from 'react'

export interface ThemeContextType {
  toggleMode: () => void
  theme: string
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  useSwitchTheme(theme)

  const toggleMode = () => {
    setTheme(prev => {
      const current = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', current)

      return current
    })
  }

  return (
    <ThemeContext.Provider value={{
      toggleMode,
      theme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }

const useSwitchTheme = (theme: string) => {
  const modeClassName = theme === 'light' ? '' : 'dark-root'

  useEffect(() => {
    document.body.className = modeClassName
  }, [modeClassName])
}