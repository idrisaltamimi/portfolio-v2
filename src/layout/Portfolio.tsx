import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { mergeRefs } from 'react-merge-refs'

import { useHashScroll } from '../hooks'
import './Portfolio.scss'

const Portfolio = () => {
  const portfolioRef = useRef<HTMLInputElement>(null)
  const { ref, inView } = useInView({ threshold: .6 })

  useHashScroll(portfolioRef.current, 'portfolio', inView)

  return (
    <section id='portfolio' ref={mergeRefs([portfolioRef, ref])}>
      <div className='portfolio grid'>
      </div>
    </section>
  )
}

export default Portfolio
