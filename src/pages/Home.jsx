import { useContext } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarActive from '../components/SidebarActive'
import { MenuContext } from '../context/MenuContext'

const Home = () => {
    const { menu, setMenu } = useContext(MenuContext)

    return (
        <>
            <Header catagory={true} />
            {menu ? <SidebarActive /> : <Sidebar />}
            <Content />
        </>
    )
}

export default Home
