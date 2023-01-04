import { useTranslation } from 'react-i18next'
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
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  const handleNavigate = () => {
    onClick()

    if (to === '') return
    navigate(to)
  }

  const switchFontClassName = (switchFont && i18n.language === 'en') ? 'button button-arabic ' :
    (switchFont && i18n.language === 'ar') ? 'button button-english' : 'button'

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
