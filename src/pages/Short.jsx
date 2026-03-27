import { useContext } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarActive from '../components/SidebarActive'
import { MenuContext } from '../context/MenuContext'
import shortIcon from '../assets/icon/short-icon.svg'
import { RequireAuth } from '../components/RequireAuth'

const Short = () => {
    const { menu, setMenu } = useContext(MenuContext)

    return (
        <>
            <Header catagory={false} />
            {menu ? <SidebarActive /> : <Sidebar />}
            <RequireAuth
                Icon={shortIcon}
                title="Don't miss new shorts videos"
                subTitle="Sign in to see updates from your favorite YouTube channels"
            />
        </>
    )
}

export default Short
