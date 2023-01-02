import { Route, Routes } from 'react-router-dom'

import { Footer, Header } from './components'
import { Main } from './pages'

const App = () => {
  return (
    <>
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
