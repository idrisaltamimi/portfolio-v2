import { useTranslation } from 'react-i18next'

import { useState } from 'react'

// import { ThemeContext, ThemeContextType } from '../context'
import { Button, ThemeToggler } from '../components'
import { useHashNavigate } from '../hooks'
import { ContactIcon, HomeIcon, LanguageIcon, PortfolioIcon, PriceIcon, ServiceIcon } from '../assets/svgIcons'
import './Header.scss'

const Header = () => {
  const hashNavigate = useHashNavigate()
  const { i18n, t } = useTranslation()
  const [toggleNav, setToggleNav] = useState(false)


  const switchLanguage = () => {
    const currentLng = i18n.language === 'ar' ? 'en' : 'ar'
    localStorage.setItem('lng', currentLng)

    return i18n.changeLanguage(currentLng)
  }

  const currentHash = window.location.hash.split('#')[2]
  const transparentHeaderClass = currentHash !== 'home' ? 'transparent-header' : ''

  return (
    <header className={`${transparentHeaderClass}`}>
      {/* <button className='logo' onClick={() => hashNavigate('home')}>Idris</button> */}
      <button>
        <div />
      </button>
      <Nav toggleNav={toggleNav} />

      <div className='buttons-header'>
        {/* <Button
          color={'light'}
          size={'small'}
          switchFont={true}
          onClick={switchLanguage}
        >
          {t('header.lng')}
        </Button> */}
        <button onClick={switchLanguage} className='nav-item'>
          <div><LanguageIcon /></div>
        </button>
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header

const Nav: React.FC<{ toggleNav: boolean }> = ({ toggleNav }) => {
  const { t } = useTranslation()
  const hashNavigate = useHashNavigate()

  const navLinks = [
    { name: 'home', icon: <HomeIcon /> },
    { name: 'portfolio', icon: <PortfolioIcon /> },
    { name: 'services', icon: <ServiceIcon /> },
    { name: 'prices', icon: <PriceIcon /> },
    { name: 'contact', icon: <ContactIcon /> },
  ]

  const navItems = t('header.nav', { returnObjects: true }) as []

  const onClick = (index: number) => hashNavigate(navLinks[index].name)

  const currentHash = window.location.hash.split('#')[2]

  return (
    <nav>
      {navItems.map((navItem, index) => {
        const classNameNav = (currentHash === undefined && index === 0) ? 'nav-item nav-item-active' :
          currentHash === navLinks[index].name ? 'nav-item nav-item-active' : 'nav-item'

        return (
          <button key={crypto.randomUUID()} onClick={() => onClick(index)} className={classNameNav}>
            <div>{navLinks[index].icon}</div>
            <div>{toggleNav && navItem}</div>
          </button>
        )
      })}
    </nav>
  )
}