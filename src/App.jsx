
import { BrowserRouter, Routes, Route } from 'react-router'

import { Now } from './pages/now'
import { History } from './pages/history'
import { Overview } from './pages/overview'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/now" element={<Now />} />
      <Route path="/history" element={<History />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
    <Footer />
    </BrowserRouter>
 
  )
}

export default App
