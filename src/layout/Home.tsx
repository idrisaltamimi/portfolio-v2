import { useEffect } from 'react'
import { MouseEvent, useContext, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { mac1, mac2 } from '../assets'

import { Button, IconsGroup } from '../components'
import { ThemeContext, ThemeContextType } from '../context'
import { useHashScroll } from '../hooks'
import './Home.scss'

const Home = () => {
  const { getHash } = useContext(ThemeContext) as ThemeContextType
  const { t } = useTranslation()
  const navigate = useNavigate()
  const homeRef = useRef<HTMLInputElement>(null)
  const { ref, inView } = useInView({ threshold: .6 })

  useHashScroll(homeRef.current, 'home', inView)
  const onMouseMove = useMouseMove()

  const onClick = () => {
    getHash('/#portfolio')
    navigate(`/#portfolio`)
  }

  return (
    <section ref={mergeRefs([homeRef, ref])} id='home' className='home' >
      <div className='home-hero'>
        <p className='home-overline'>{t('home.overline')}</p>
        <div className='home-heading'>
          <h1 className='home-title' >{t('home.title')}</h1>
          <UnderlineSvg />
        </div>
        <h2 className='home-subtitle'>{t('home.subtitle')}</h2>
        <div className='home-buttons'>
          <Button
            color='light'
            size='large'
            onClick={onClick}
          >{t('home.contact')}
          </Button>
          <p>{t('or')}</p>
          <div className='mission-action'>
            <Button
              color='outlined'
              size='large'
              to={'#contact'}
            >
              {t('home.hireMe')}
            </Button>
            <HighlightArrow />
          </div>
        </div>
      </div>
      {/* <img src={mac2} alt='' className='hero-img' /> */}
      {/* <p className='home-about border-theme'>{t('home.about')}</p> */}

      {/* <p className='subtitle'>The Prophet (ﷺ) said, 'No one of you becomes a true believer until he likes for his brother what he likes for himself'.</p> */}

      {/* <IconsGroup /> */}
    </section>
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

const HighlightArrow = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const fill = theme === 'light' ? '#000' : '#fff'

  return (
    <svg viewBox='0 0 432.29 324.91'>
      <path d='M338,618.39c-4.21-32.53.77-65.92,11.69-96.72,32.94-93.45,128.07-147.34,220.49-167.46a547.69,547.69,0,0,1,73-10.85,619.64,619.64,0,0,1,65.32-2.07l.22,6.95c-21.52,1.92-43,4-64.26,6.9A727.59,727.59,0,0,0,550,373.79c-41,11.16-81.32,26.83-116,51.84-57.68,40.43-94.18,105.64-95.22,176.45a139.26,139.26,0,0,0,.58,16.1l-1.39.21Z' transform='translate(-336.53 -293.48)' fill={fill} />
      <path d='M763.22,355.26,744.49,367l-99.18,53.49a2.34,2.34,0,0,1-3.54-2.62c3.39-10.93,38.74-66.39,41.51-72.15a2.32,2.32,0,0,0-.66-2.84s-37.49-57.51-21.73-48.39l101.86,48.69C775.28,348.66,764.78,354.21,763.22,355.26Z' transform='translate(-336.53 -293.48)' fill={fill} />
    </svg>
  )
}

const UnderlineSvg = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const fill = theme === 'light' ? '#1C41B0' : '#87b7f2'

  return (
    <svg fill={fill} viewBox='0 0 920 50.79'>
      <path d='M888,435.86s-577.5,12-646.95,4.57c56.77,35.05,620,33.14,620,33.14s-373,4.38-423.08,5.72c90.38,8.19,466.18,17.14,723.06-18.86-221.68,1.71-693.57-3.43-725-6.29C549.25,451.29,858.46,456.24,888,435.86Z' transform='translate(-241 -435.86)' />
    </svg>
  )
}