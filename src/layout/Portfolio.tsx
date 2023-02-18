import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { mergeRefs } from 'react-merge-refs'

import { aqariFormM, aqariHome, aqariLatest, aqariLogin, aqariPostM, aqariPostsM, dalleCreate, dalleGenerate, dalleGenerateM, dalleHome, dalleHome2, dalleHomeM, dalleSearchM, kanbanDarkHome, kanbanEmptyHome, kanbanHome, kanbanModal, kanbanModalM, kanbanNavM, spaceHome, spaceHomeM, spaceNavM, spacePlanet, spaceTravel } from '../assets/portfolio-img'
import { useHashScroll } from '../hooks'
import './Portfolio.scss'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const { t } = useTranslation()
  const portfolioRef = useRef<HTMLInputElement>(null)
  const { ref, inView } = useInView({ threshold: .6 })

  useHashScroll(portfolioRef.current, 'portfolio', inView)

  const onMouseMove = useMouseMove()

  const dalleArray = [dalleHome, dalleCreate, dalleGenerate, dalleHome2, dalleHome]
  const dalleMobileArray = [dalleHomeM, dalleSearchM, dalleGenerateM, dalleHomeM]
  const kanbanArray = [kanbanHome, kanbanEmptyHome, kanbanDarkHome, kanbanModal, kanbanHome]
  const kanbanArrayMobile = [kanbanNavM, kanbanModalM, kanbanNavM]
  const aqariArray = [aqariHome, aqariLatest, aqariLogin, aqariHome]
  const aqariArrayMobile = [aqariPostsM, aqariFormM, aqariPostM, aqariPostsM]
  const spaceArray = [spaceHome, spacePlanet, spaceTravel, spaceHome]
  const spaceArrayMobile = [spaceHomeM, spaceNavM, spaceHomeM]

  return (
    <section id='portfolio' ref={mergeRefs([portfolioRef, ref])} onMouseMove={(e: MouseEvent) => onMouseMove(e)}>
      <h2 className='pl'>{t('portfolio.title')}</h2>

      <div className='project first-project'>
        <div className='project-desc'>
          <h3>{t('portfolio.dalle')}</h3>
          <p>{t('portfolio.dalleDescription')}</p>
        </div>
        <div className='project-cards'>
          <Card array={dalleArray} />
          <Card array={dalleMobileArray} mobile={true} />
        </div>
      </div>

      <div className='project'>
        <h3>Kanban</h3>
        <div className='project-cards'>
          <Card array={kanbanArray} />
          <Card array={kanbanArrayMobile} mobile={true} />
        </div>
      </div>

      <div className='project'>
        <h3>Aqari</h3>
        <div className='project-cards'>
          <Card array={aqariArray} />
          <Card array={aqariArrayMobile} mobile={true} />
        </div>
      </div>

      <div className='project'>
        <h3>Space Tourism</h3>
        <div className='project-cards'>
          <Card array={spaceArray} />
          <Card array={spaceArrayMobile} mobile={true} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio

const Card = ({ array, mobile }: { array: string[], mobile?: boolean }) => {
  const { i18n } = useTranslation()
  const currentPosition = useCurrentPosition(array.length)

  const style = i18n.language === 'ar' ? (
    { transform: `translateX(${currentPosition * 100}%)` }
  ) : (
    { transform: `translateX(${currentPosition * - 100}%)` }
  )

  const lastRotation = currentPosition === 0 ? (
    { transition: 'none' }
  ) : (
    { transition: 'transform 500ms ease-in-out' }
  )

  return (
    <div className={`card ${mobile ? 'mobile-card' : ''}`}>
      <div className='slider-wrapper'>
        <div className='slider' style={{ ...style, ...lastRotation }} >
          {array.map(img => (
            <img
              key={crypto.randomUUID()}
              className='portfolio-img'
              src={img}
              alt=''
              width={mobile ? 160 : 500}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const useMouseMove = () => {
  const root = document.documentElement

  const onMouseMove = (e: MouseEvent) => {
    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    const offsetX = ((e.clientX) - middleX) / middleX
    const offsetY = ((e.clientY) - middleY) / middleY

    root.style.setProperty('--mouse-x', `${-1 * offsetY * 25}deg`)
    root.style.setProperty('--mouse-y', `${offsetX * 25}deg`)
  }
  return onMouseMove
}

const useCurrentPosition = (length: number) => {
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    if (currentPosition === length) setCurrentPosition(0)

    const time = (currentPosition === length - 1 || currentPosition === 0) ? length * 700 : length * 1400

    const interval = setInterval(() => {
      setCurrentPosition(prev => prev + 1)
    }, time)


    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition])

  return currentPosition
}