import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeContext, ThemeContextType } from './context'
import { backgroundDark, backgroundLight } from './assets'
import { Footer, Header, PathScroll } from './components'
import { Main } from './pages'
import './App.css'

const App = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType

  const backgroundImage = theme === 'light' ? backgroundLight : backgroundDark

  return (
    <>
      <img src={backgroundImage} alt='' className='background-image' data-theme={theme} />
      <PathScroll />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App