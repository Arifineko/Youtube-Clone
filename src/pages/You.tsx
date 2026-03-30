import { useContext } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarActive from '../components/SidebarActive'
import { MenuContext } from '../context/MenuContext'
import { RequireAuth } from '../components/RequireAuth'
import shortIcon from '../assets/icon/you-icon.svg'

const You = () => {
    const { menu, setMenu } = useContext(MenuContext)

    return (
        <>
            <Header category={false} />
            {menu ? <SidebarActive /> : <Sidebar />}
            <RequireAuth
                Icon={shortIcon}
                title="Enjoy your favorite videos"
                subTitle="Sign in to access videos that you’ve liked or saved"
            />
        </>
    )
}

export default You
