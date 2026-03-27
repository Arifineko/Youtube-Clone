import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Watch from './pages/Watch'
import { useState } from 'react'
import { MenuContext } from './context/MenuContext'
import { Result } from './pages/Result'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollToTop from './components/ScrollToTop';
import Subscription from './pages/Subscription'
import Short from './pages/Short'

const queryClient = new QueryClient()

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MenuContext.Provider value={{ menu, setMenu }}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/watch' element={<Watch />} />
              <Route path='/results' element={<Result />} />
              <Route path='/shorts' element={<Short />} />
              <Route path='/feed/subscriptions' element={<Subscription />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MenuContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
