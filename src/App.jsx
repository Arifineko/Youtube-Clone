import { useState } from 'react'
import './App.css'
import Content from './Components/Content'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import SidebarActive from './Components/SidebarActive'
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
