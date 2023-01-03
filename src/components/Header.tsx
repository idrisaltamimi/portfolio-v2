import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'

import './Header.css'
import { Button, Toggler } from './'

const Header = () => {

  return (
    <header>
      <Link className='logo' to='/'>
        <span className='logo-span'>Idris</span>
      </Link>
      <Nav />

      <div className='buttons-header'>
        <Button
          label={'العربية'}
          color={'light'}
          size={'small'}
          switchFont={true}
        />
        <Button
          label={'Hire Me'}
          color={'outlined'}
          size={'small'}
        />

        <Toggler />
      </div>
    </header>
  )
}

export default Header

const Nav = () => {
  const to = (hash: string) => ({ pathname: '/', hash: `#${hash}` })
  const navItems = ['Home', 'About', 'Portfolio', 'Contact']

  return (
    <nav>
      {navItems.map((navItem, index) => {
        const classNameNav = index === 0 ? 'nav-item nav-item-active' : 'nav-item'
        return (
          <Link key={index} to={to(navItem.toLocaleLowerCase())} className={classNameNav}>
            {navItem}
          </Link>
        )
      })}
    </nav>
  )
}