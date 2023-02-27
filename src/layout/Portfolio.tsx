import { FC, ReactElement, useEffect, useRef, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import { mergeRefs } from 'react-merge-refs'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import {
  dalleArray, dalleMobileArray, kanbanArray, kanbanArrayMobile, aqariArray, aqariArrayMobile, spaceArray, spaceArrayMobile, movieArray,
  movieArrayMobile
} from '../assets/portfolio-img'
import { CssLogo, HtmlLogo, JavascriptLogo, MongoLogo, NodeLogo, ReactLogo, TailwindLogo, TypescriptLogo } from '../assets'
import { useHashScroll } from '../hooks'
import './Portfolio.scss'

const Portfolio = () => {
  const { t } = useTranslation()
  const portfolioRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: .4 })

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
        title={t('portfolio.kanban')}
        description={t('portfolio.kanbanDescription')}
        array={kanbanArray}
        arrayMobile={kanbanArrayMobile}
        arrayLogos={[<ReactLogo />, <TypescriptLogo />, <CssLogo />, <NodeLogo />, <MongoLogo />]}
      />

      <Project
        title={t('portfolio.aqari')}
        description={t('portfolio.aqariDescription')}
        array={aqariArray}
        arrayMobile={aqariArrayMobile}
        arrayLogos={[<ReactLogo />, <JavascriptLogo />, <CssLogo />, <NodeLogo />, <MongoLogo />]}
      />

      <Project
        title={t('portfolio.space')}
        description={t('portfolio.spaceDescription')}
        array={spaceArray}
        arrayMobile={spaceArrayMobile}
        arrayLogos={[<ReactLogo />, <JavascriptLogo />, <CssLogo />]}
      />

      <Project
        title={t('portfolio.watchlist')}
        description={t('portfolio.watchlistDescription')}
        array={movieArray}
        arrayMobile={movieArrayMobile}
        arrayLogos={[<HtmlLogo />, <JavascriptLogo />, <CssLogo />]}
      />
    </section>
  )
}

export default Portfolio

interface ProjectType {
  title: string,
  description: string,
  array: string[],
  arrayMobile: string[],
  arrayLogos: ReactElement[],
}

const Project: FC<ProjectType> = ({ title, description, array, arrayMobile, arrayLogos }) => {
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
            <Card array={arrayMobile} mobile={true} />
          </div>
        </div>
      )}
    </InView>
  )
}

const Card = ({ array, mobile }: { array: string[], mobile?: boolean }) => {
  const [currentMobileImage] = useCurrentImage(array.length)

  return (
    <div className={`card ${mobile ? 'mobile-card' : ''}`}>
      <div className='slider-wrapper'>
        <LazyLoadImage
          className='enter-image portfolio-img'
          alt=''
          src={array[currentMobileImage]}
          effect='blur'
        />
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

const useCurrentImage = (length: number) => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === length - 1) setCurrentImage(0)
      else { setCurrentImage(prev => prev + 1) }
    }, 4000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage])

  return [currentImage]
}