import { createContext, ReactElement, useEffect, useState } from 'react'

export interface ThemeContextType {
  toggleMode: () => void
  getHash: (hash: string) => void
  toggleMenu: () => void
  closeMenu: () => void
  theme: string
  hash: string
  menu: boolean
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: { children: ReactElement }) => {
  const [hash, setHash] = useState('')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [menu, setMenu] = useState(false)

  useSwitchTheme(theme)

  const getHash = (hash: string) => setHash(hash)

  const toggleMode = () => {
    setTheme(prev => {
      const current = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', current)

      return current
    })
  }

  const toggleMenu = () => setMenu(prev => !prev)
  const closeMenu = () => setMenu(false)

  return (
    <ThemeContext.Provider value={{
      toggleMode,
      getHash,
      toggleMenu,
      closeMenu,
      theme,
      hash,
      menu
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