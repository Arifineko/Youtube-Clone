import { useContext } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarActive from '../components/SidebarActive'
import { MenuContext } from '../context/MenuContext'
import subscriptionIcon from '../assets/icon/subscription-icon.svg'
import { RequireAuth } from '../components/RequireAuth'

const Subscription = () => {
    const { menu, setMenu } = useContext(MenuContext)

    return (
        <>
            <Header catagory={false} />
            {menu ? <SidebarActive /> : <Sidebar />}
            <RequireAuth
                Icon={subscriptionIcon}
                title="Don't miss new videos"
                subTitle="Sign in to see updates from your favorite YouTube channels"
            />
        </>
    )
}

export default Subscription
