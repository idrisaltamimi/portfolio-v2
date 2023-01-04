import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, ThemeToggler } from '../components'
import './Header.css'
import { useContext, useState } from 'react'
import { ThemeContext, ThemeContextType } from '../context'
import { useHashNavigate } from '../hooks'

const Header = () => {
  const hashNavigate = useHashNavigate()
  const { i18n, t } = useTranslation()
  const switchLanguage = () => {
    const currentLng = i18n.language === 'ar' ? 'en' : 'ar'
    localStorage.setItem('lng', currentLng)

    return i18n.changeLanguage(currentLng)
  }

  return (
    <header>
      <button className='logo' onClick={() => hashNavigate('home')}>Idris</button>
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

const Nav = () => {
  const { t } = useTranslation()
  const hashNavigate = useHashNavigate()

  const navLinks = ['home', 'about', 'portfolio', 'contact']

  const navItems = t('header.nav', { returnObjects: true }) as []

  const onClick = (index: number) => hashNavigate(navLinks[index])

  const currentHash = window.location.hash.split('#')[2]
  console.log(currentHash)
  return (
    <nav>
      {navItems.map((navItem, index) => {
        const classNameNav = (currentHash === undefined && index === 0) ? 'nav-item nav-item-active' :
          currentHash === navLinks[index] ? 'nav-item nav-item-active' : 'nav-item'

        return (
          <button key={crypto.randomUUID()} onClick={() => onClick(index)} className={classNameNav}>
            {navItem}
          </button>
        )
      })}
    </nav>
  )
}