import { Link } from 'react-router-dom'

import './Header.css'
import { Button, Toggler } from './'

const Header = () => {
  const navItems = ['Home', 'About', 'Portfolio', 'Contact']

  return (
    <header>
      <Link className='logo' to='/'>
        <span className='logo-span'>idris</span>
      </Link>
      <nav>
        {navItems.map((navItem, index) => {
          const classNameNav = index === 0 ? 'nav-item nav-item-active' : 'nav-item'
          return (<a key={index} href={`#${navItem.toLocaleLowerCase()}`} className={classNameNav}>
            {navItem}
          </a>)
        })}
      </nav>

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
