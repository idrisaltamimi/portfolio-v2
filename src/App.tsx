import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ThemeContext, ThemeContextType } from './context'
import { Footer, Sidebar } from './layout'
import { Main } from './pages'
import './App.scss'

const App = () => {
  useSwitchPageDirecting()
  const { menu } = useContext(ThemeContext) as ThemeContextType

  // const onMouseMove = useMouseMove()

  const sidebarActiveClass = menu ? 'sidebar-active' : ''

  return (
    <>
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
    const currentLng = localStorage.getItem('lng') || 'ar'

    i18n.changeLanguage(currentLng)

    window.location.hash = '#/#home'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr'

    document.body.dir = direction
  }, [i18n.language])
}