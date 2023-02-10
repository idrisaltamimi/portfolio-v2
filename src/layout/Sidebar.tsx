import { useTranslation } from 'react-i18next'

import { useContext, useEffect, useState } from 'react'

import { ThemeContext, ThemeContextType } from '../context'
import { useHashNavigate } from '../hooks'
import { ContactIcon, HomeIcon, LanguageIcon, PortfolioIcon, PriceIcon, ServiceIcon, MoonIcon, SunIcon } from '../assets/svgIcons'
import './Sidebar.scss'

const navLinks = [
  { name: 'home', icon: <HomeIcon /> },
  { name: 'portfolio', icon: <PortfolioIcon /> },
  { name: 'services', icon: <ServiceIcon /> },
  { name: 'prices', icon: <PriceIcon /> },
  { name: 'contact', icon: <ContactIcon /> },
]

const Sidebar = () => {
  const { theme, toggleMenu, closeMenu, menu, toggleMode } = useContext(ThemeContext) as ThemeContextType
  const hashNavigate = useHashNavigate()
  const { i18n, t } = useTranslation()

  const [text, setText] = useState(false)
  const [hamburgerClass, setHamburgerClass] = useState('')

  useToggleMenu(menu, setHamburgerClass)
  useShowText(menu, text, setText)

  const onNavClick = (index: number) => hashNavigate(navLinks[index].name)
  const switchLanguage = () => {
    const currentLng = i18n.language === 'ar' ? 'en' : 'ar'
    localStorage.setItem('lng', currentLng)
    i18n.changeLanguage(currentLng)
  }

  const sidebarClass = menu ? 'sidebar' : ''
  const mxSidebarClass = text ? 'mx-sidebar' : ''
  const navItems = t('header.nav', { returnObjects: true }) as []
  const currentHash = window.location.hash.split('#')[2]

  return (
    <>
      <header className={`${sidebarClass} ${mxSidebarClass}`}>
        <div className='header-row'>
          <button className={`hamburger ${hamburgerClass}`} onClick={toggleMenu}>
            <div className='hamburger-div' />
          </button>
          <button className='logo' onClick={() => hashNavigate('home')}>
            IA
          </button>
        </div>

        <nav className='header-section'>
          {navItems.map((navItem, index) => {
            const navClass = currentHash === navLinks[index].name ? 'nav-row nav-row-active' : 'nav-row'
            return (
              <button key={navItem} onClick={() => onNavClick(index)} className={navClass}>
                <div className='nav-icon'>{navLinks[index].icon}</div>
                <div className='nav-text'>{navItem}</div>
              </button>
            )
          })}
        </nav>

        <div className='header-section'>
          <button onClick={switchLanguage} className='nav-row'>
            <div className='nav-icon'><LanguageIcon /></div>
            <div className='nav-text header-lng'>{t('header.lng')}</div>
          </button>
          <button className='nav-row' onClick={toggleMode}>
            <button className='nav-icon'>
              {theme === 'light' ? (
                <MoonIcon />
              ) : (
                <SunIcon />
              )}
            </button>
            <div ></div>
          </button>
        </div>
      </header>
      {menu && <div className='header-overlay' onClick={closeMenu} />}
    </>
  )
}

export default Sidebar

const useToggleMenu = (menu: boolean, setState: (string: string) => void) => {
  useEffect(() => {
    if (menu) {
      setState('active-ham')
      const timeout = setTimeout(() => {
        setState('active-ham active-x')
      }, 250)

      return () => clearTimeout(timeout)
    } else {
      setState('active-ham')
      const timeout = setTimeout(() => {
        setState('')
      }, 250)

      return () => clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu])
}

const useShowText = (menu: boolean, text: boolean, setState: (boolean: boolean) => void) => {
  useEffect(() => {
    if (!menu) return setState(false)
    if (text) return

    const timeout = setTimeout(() => {
      setState(true)
    }, 450)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu])
}