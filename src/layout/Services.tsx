import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { mergeRefs } from 'react-merge-refs'

import { useHashScroll } from '../hooks'

const Services = () => {
  const servicesRef = useRef<HTMLInputElement>(null)
  const { ref, inView } = useInView({ threshold: .6 })

  useHashScroll(servicesRef.current, 'services', inView)

  return (
    <section id='services' ref={mergeRefs([servicesRef, ref])}>
      dslkzknasm
    </section>
  )
}

export default Services
