import youtubeLogo from '../assets/logo/youtube-logo.svg'
import ButtonMenu from './buttonMenu'
import { sidebarDataActive } from '../data/sidebarData'

const SidebarActive = () => {
    return (
        <div className='fixed left-0 top-0 bottom-0 bg-white w-52'>
            <div className='flex gap-4 p-4 fixed left-0 top-0'>
                <ButtonMenu />
                <img src={youtubeLogo} alt="" />
            </div>
            <div className='mt-15 overflow-y-auto h-screen'>
                {sidebarDataActive.map((icon, key) => {
                    return (
                        <div key={key} className='flex gap-6 p-4 ml-2'>
                            <img className='h-6 w-6' src={icon.image} alt="" />
                            <p>{icon.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SidebarActive
