import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'

import { useTranslation } from 'react-i18next'

import './Header.css'
import { Button, ThemeToggler } from '../components'

const Header = () => {
  const { i18n, t } = useTranslation()
  const switchLanguage = () => {
    const currentLng = i18n.language === 'ar' ? 'en' : 'ar'
    localStorage.setItem('lng', currentLng)

    return i18n.changeLanguage(currentLng)
  }

  return (
    <header>
      <Link className='logo' to='/'>
        <span className='logo-span'>Idris</span>
      </Link>
      <Nav />

      <div className='buttons-header'>
        <Button
          label={t('header.lng')}
          color={'light'}
          size={'small'}
          switchFont={true}
          onClick={switchLanguage}
        />
        <Button
          label={t('header.hireMe')}
          color={'outlined'}
          size={'small'}
        />

        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header

interface itemProps {
  itemProps: string
}

const Nav = () => {
  const { t } = useTranslation()
  const to = (hash: string) => ({ pathname: '/', hash: `${hash}` })
  const navItems = ['Home', 'About', 'Portfolio', 'Contact']

  const arr = t('header.nav', { returnObjects: true }) as []

  return (
    <nav>
      {arr.map((navItem, index) => {
        const classNameNav = index === 0 ? 'nav-item nav-item-active' : 'nav-item'
        return (
          <Link key={index} to={to(navItems[index].toLocaleLowerCase())} className={classNameNav}>
            {navItem}
          </Link>
        )
      })}
    </nav>
  )
}