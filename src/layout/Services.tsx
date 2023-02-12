import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { mergeRefs } from 'react-merge-refs'

import { useHashScroll } from '../hooks'
import { CalenderIcon, CodeIcon, DesignIcon, idea, TestIcon } from '../assets'
import './Services.scss'
import { Button } from '../components'

const Services = () => {
  const { t } = useTranslation()
  const servicesRef = useRef<HTMLInputElement>(null)
  const { ref, inView } = useInView({ threshold: .6 })

  useHashScroll(servicesRef.current, 'services', inView)

  return (
    <section id='services' ref={mergeRefs([servicesRef, ref])}>
      <h2>{t('services.title')}</h2>
      <div className='calender service'>
        {/* <p>1</p> */}
        <CalenderIcon />
        <p>{t('services.calender')}</p>
      </div>
      <div className='design service'>
        {/* <p>2</p> */}
        <DesignIcon />
        <p>{t('services.design')}</p>
      </div>
      <img className='idea' src={idea} alt='light bulb' loading='lazy' />
      <div className='create service'>
        <CodeIcon />
        <p>{t('services.create')}</p>
      </div>
      <div className='test service'>
        <TestIcon />
        <p>{t('services.test')}</p>
      </div>

      <Button
        size='large'
        color='outlined'
      >
        {t('services.start')}
      </Button>
    </section>
  )
}

export default Services
