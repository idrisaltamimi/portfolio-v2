
import { useNavigate } from 'react-router-dom'

import './Button.css'

interface Props {
  label: string
  size: string
  color: string
  to?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  label,
  size = 'large',
  color,
  to = '',
  onClick = () => ''
}) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    onClick()

    if (to === '') return
    navigate(to)
  }

  return (
    <div>
      <button
        className='button'
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
