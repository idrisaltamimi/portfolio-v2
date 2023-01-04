import { useRef } from 'react'

import { useHashScroll } from '../hooks'

const Portfolio = () => {
  const portfolioRef = useRef<HTMLInputElement>(null)
  useHashScroll(portfolioRef.current, 'portfolio')

  return (
    <section id='portfolio' ref={portfolioRef}>

    </section>
  )
}

export default Portfolio
