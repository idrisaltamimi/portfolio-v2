import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ThemeContext, ThemeContextType } from './context'
import { backgroundDark, backgroundLight } from './assets'
import { PathScroll } from './components'
import { Footer, Sidebar } from './layout'
import { Main } from './pages'
import './App.scss'

const App = () => {
  useSwitchPageDirecting()
  useStoredLng()
  const { theme, menu } = useContext(ThemeContext) as ThemeContextType
  const backgroundImage = theme === 'light' ? backgroundLight : backgroundDark
  const sidebarActiveClass = menu ? 'sidebar-active' : ''

  return (
    <>
      <img src={backgroundImage} alt='' className='background-image' data-theme={theme} />
      <PathScroll />
      <Sidebar />
      <main className={sidebarActiveClass}>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

const useSwitchPageDirecting = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr'

    document.body.dir = direction
  }, [i18n.language])
}

const useStoredLng = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const currentLng = localStorage.getItem('lng') || 'ar'

    i18n.changeLanguage(currentLng)

    window.location.hash = '#/#home'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}