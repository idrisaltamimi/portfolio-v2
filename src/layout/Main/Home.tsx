import { MouseEvent } from 'react'

import { Button, IconsGroup } from '../../components'
import './Home.css'

const Home = () => {
  const root = document.documentElement
  const onMouseMove = (e: MouseEvent) => {
    const mouseX = (e.clientX) / window.innerWidth
    const mouseY = (e.clientY) / window.innerHeight

    root.style.setProperty('--mouse-x', `${mouseX * 7}%`)
    root.style.setProperty('--mouse-y', `${mouseY * 7}%`)
  }

  return (
    <>
      <section id='home' className='home' onMouseMove={onMouseMove}>
        <div className='home-hero'>
          <p className='home-overline'>I am Idris Al Tamimi,</p>
          <h1 className='home-title' >Frontend Developer</h1>
          <h2 className='home-subtitle'>I create websites and web applications
            {/* <br />and mobile apps */}
          </h2>
          <div className='home-buttons'>
            <Button
              label='My Projects'
              color='light'
              size='large'
              to={'#portfolio'}
            />
            <Button
              label='Contact Me'
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