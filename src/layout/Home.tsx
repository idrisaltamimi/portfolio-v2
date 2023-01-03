import { MouseEvent } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import { Button, IconsGroup } from '../components'
import './Home.css'

const Home = () => {
  const { t } = useTranslation()
  const onMouseMove = useMouseMove()

  return (
    <>
      <section id='home' className='home' onMouseMove={onMouseMove}>
        <div className='home-hero'>
          <p className='home-overline'>{t('home.overline')}</p>
          <h1 className='home-title' >{t('home.title')}</h1>
          <h2 className='home-subtitle'>{t('home.subtitle')}</h2>
          <div className='home-buttons'>
            <Button
              label={t('home.projects')}
              color='light'
              size='large'
              to={'#portfolio'}
            />
            <Button
              label={t('home.contact')}
              color='outlined'
              size='large'
              to={'#contact'}
            />
          </div>
        </div>

        {/* <p className='subtitle'>The Prophet (ﷺ) said, "No one of you becomes a true believer until he likes for his brother what he likes for himself".</p> */}

        {/* <IconsGroup /> */}
      </section>
    </>
  )
}

export default Home

const useMouseMove = () => {
  const root = document.documentElement

  const onMouseMove = (e: MouseEvent) => {
    const mouseX = (e.clientX) / window.innerWidth
    const mouseY = (e.clientY) / window.innerHeight

    root.style.setProperty('--mouse-x', `${mouseX * 7}%`)
    root.style.setProperty('--mouse-y', `${mouseY * 7}%`)
  }
  return onMouseMove
}