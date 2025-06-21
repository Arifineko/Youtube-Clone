import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SidebarActive from './components/SidebarActive'
import { MenuContext } from './context/MenuContext'


function App() {
  const [menu, setMenu] = useState(false)

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <Header />
      {menu ? <SidebarActive /> : <Sidebar />}
      <Content />
    </MenuContext.Provider>
  )
}

export default App
