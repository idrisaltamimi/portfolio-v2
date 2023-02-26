
import { useTranslation } from 'react-i18next'
import './Footer.scss'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <p>&copy; {t('footer')}</p>
    </footer>
  )
}

export default Footer
