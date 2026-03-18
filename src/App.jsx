import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Watch from './pages/Watch'
import { useState } from 'react'
import { MenuContext } from './context/MenuContext'



function App() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <MenuContext.Provider value={{ menu, setMenu }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/watch' element={<Watch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MenuContext.Provider>
    </>
  )
}

export default App
