import Content from '../components/Content'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarActive from '../components/SidebarActive'
import { MenuContext } from '../context/MenuContext'
import { useState } from 'react'

const Home = () => {
    const [menu, setMenu] = useState(false)

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            <Header />
            {menu ? <SidebarActive /> : <Sidebar />}
            <Content />
        </MenuContext.Provider>
    )
}

export default Home
