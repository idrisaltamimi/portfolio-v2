
import { Button, IconsGroup } from '../../components'
import './Home.css'

const Home = () => {

  return (
    <>
      <section id='home' className='home'>
        <div>
          <p >I am Idris Al Tamimi,</p>
          <h1 className='title' >Frontend Developer</h1>
          <h2 className='subtitle-home'>I create websites and wep applications</h2>
          <div>
            <Button
              label='My Projects'
              color='light'
              size='small'
              to={'#portfolio'}
            />
            <Button
              label='Contact Me'
              color='outlined'
              size='small'
              to={'#contact'}
            />
          </div>
        </div>

        {/* <p className='subtitle'>The Prophet (ﷺ) said, "No one of you becomes a true believer until he likes for his brother what he likes for himself".</p> */}

        <IconsGroup />
      </section>
    </>
  )
}

export default Home