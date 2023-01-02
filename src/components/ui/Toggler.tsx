

import { useState } from 'react'
import './Toggler.css'

const Toggler = () => {
  const [toggleMode, setToggleMode] = useState(false)

  const toggle = () => setToggleMode(prev => !prev)

  const classNameToggler = toggleMode ? 'toggler toggler-light' : 'toggler'
  const classNameToggle = toggleMode ? 'toggle toggle-light' : 'toggle'

  return (
    <button className='toggler-btn' onClick={toggle}>
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

export default Toggler
