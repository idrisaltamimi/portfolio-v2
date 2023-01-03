import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ThemeContext, ThemeContextType } from './context'
import { backgroundDark, backgroundLight } from './assets'
import { PathScroll } from './components'
import { Footer, Header } from './layout'
import { Main } from './pages'
import './App.css'

const App = () => {
  useSwitchPageDirecting()
  useStoredLng()
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const backgroundImage = theme === 'light' ? backgroundLight : backgroundDark

  return (
    <>
      <img src={backgroundImage} alt='' className='background-image' data-theme={theme} />
      <PathScroll />
      <Header />
      <main>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}