
import { useNavigate } from 'react-router-dom'

import './Button.css'

interface Props {
  label: string
  size: string
  color: string
  to?: string
  switchFont?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  label,
  size = 'large',
  color,
  to = '',
  switchFont,
  onClick = () => ''
}) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    onClick()

    if (to === '') return
    navigate(to)
  }

  const switchFontClassName = switchFont ? 'button button-arabic' : 'button'
  // { fontFamily: "'Nikar', sans-serif" } : { fontFamily: "'Titillium Web', sans-serif" }

  return (
    <div>
      <button
        className={switchFontClassName}
        data-color={color}
        data-size={size}
        onClick={handleNavigate}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
