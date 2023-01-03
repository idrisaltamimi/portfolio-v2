import { Route, Routes } from 'react-router-dom'

import { Footer, Header, PathScroll } from './components'
import { Main } from './pages'

const App = () => {


  return (
    <>
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