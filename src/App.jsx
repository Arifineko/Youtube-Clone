import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Watch from './pages/Watch'
import { useState } from 'react'
import { MenuContext } from './context/MenuContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MenuContext.Provider value={{ menu, setMenu }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/watch' element={<Watch />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MenuContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
