import { ReactElement, useEffect, useRef, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import { mergeRefs } from 'react-merge-refs'

import { dalleArray, dalleMobileArray, kanbanArray, kanbanArrayMobile, aqariArray, aqariArrayMobile, spaceArray, spaceArrayMobile } from '../assets/portfolio-img'
import { CssLogo, JavascriptLogo, MongoLogo, NodeLogo, ReactLogo, TailwindLogo, TypescriptLogo } from '../assets'
import { useHashScroll } from '../hooks'
import './Portfolio.scss'

const Portfolio = () => {
  const { t } = useTranslation()
  const portfolioRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: .6 })

  useHashScroll(portfolioRef.current, 'portfolio', inView)

  return (
    <section id='portfolio'>
      <h2 ref={mergeRefs([portfolioRef, ref])} className='section-title pl'>{t('portfolio.title')}</h2>

      <Project
        title={t('portfolio.dalle')}
        description={t('portfolio.dalleDescription')}
        array={dalleArray}
        arrayMobile={dalleMobileArray}
        arrayLogos={[<ReactLogo />, <TypescriptLogo />, <TailwindLogo />, <NodeLogo />, <MongoLogo />]}
      />

      <Project
        title={'Kanban'}
        description={t('portfolio.dalleDescription')}
        array={kanbanArray}
        arrayMobile={kanbanArrayMobile}
        arrayLogos={[<ReactLogo />, <TypescriptLogo />, <CssLogo />, <NodeLogo />, <MongoLogo />]}
      />

      <Project
        title={'Aqari'}
        description={t('portfolio.dalleDescription')}
        array={aqariArray}
        arrayMobile={aqariArrayMobile}
        arrayLogos={[<ReactLogo />, <JavascriptLogo />, <CssLogo />, <NodeLogo />, <MongoLogo />]}
      />

      <Project
        title={'Space Tourism'}
        description={t('portfolio.dalleDescription')}
        array={spaceArray}
        arrayMobile={spaceArrayMobile}
        arrayLogos={[<ReactLogo />, <JavascriptLogo />, <CssLogo />]}
      />
    </section>
  )
}

export default Portfolio

const Project = ({
  title, description, array, arrayMobile, arrayLogos
}: {
  title: string, description: string, array: string[], arrayMobile: string[], arrayLogos: ReactElement[]
}) => {
  return (
    <InView threshold={.5}>
      {({ inView, ref }) => (
        <div className='project first-project' ref={ref}>
          <div className={`project-desc ${inView ? 'enter-content' : 'hide-right'}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='tech-logos'>
              {arrayLogos.map(logo => <div key={crypto.randomUUID()}>{logo}</div>)}
            </div>
          </div>
          <div className={`project-cards ${inView ? 'enter-content' : 'hide-left'}`}>
            <Card array={array} />
            {/* <Card array={arrayMobile} mobile={true} /> */}
          </div>
        </div>
      )}
    </InView>
  )
}

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
              loading='lazy'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// const useMouseMove = () => {
//   const root = document.documentElement

//   const onMouseMove = (e: MouseEvent) => {
//     const middleX = window.innerWidth / 2
//     const middleY = window.innerHeight / 2

//     const offsetX = ((e.clientX) - middleX) / middleX
//     const offsetY = ((e.clientY) - middleY) / middleY

//     root.style.setProperty('--mouse-x', `${-1 * offsetY * 25}deg`)
//     root.style.setProperty('--mouse-y', `${offsetX * 25}deg`)
//   }
//   return onMouseMove
// }

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