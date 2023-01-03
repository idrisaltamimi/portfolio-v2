import { useContext } from 'react'

import { ThemeContext, ThemeContextType } from '../../context'
import './ThemeToggler.css'

const ThemeToggler = () => {
  const { toggleMode, theme } = useContext(ThemeContext) as ThemeContextType

  const classNameToggler = theme === 'light' ? 'toggler toggler-light' : 'toggler'
  const classNameToggle = theme === 'light' ? 'toggle toggle-light' : 'toggle'

  return (
    <button className='toggler-btn' onClick={toggleMode}>
      <div className={classNameToggler}>
        <div className={classNameToggle} />
        <div className={classNameToggle} />
        <div className={classNameToggle} />
        <div className={classNameToggle} />
        <div className={classNameToggle} />
        <div className={classNameToggle} />
        <div className={classNameToggle} />
        <div className={classNameToggle} />
      </div>
    </button>
  )
}

export default ThemeToggler
