import { sidebarDataActive } from '../data/sidebarData'
import SignButton from './SignButton'
import { NavLink } from 'react-router-dom'

const SidebarActive = () => {
    return (
        <div className='fixed flex flex-col z-60 left-0 top-15 bottom-0 bg-white w-55'>
            <div className='overflow-y-auto mb-4'>
                {sidebarDataActive.map((icon, key) => {
                    return (
                        <NavLink
                            key={key}
                            className='flex gap-6 p-4 ml-2'
                            to={icon.path}
                        >
                            <img className='h-6 w-6' src={icon.image} alt="" />
                            <p>{icon.name}</p>
                        </NavLink>
                    )
                })}
            </div>
            <hr className='border border-gray-200' />
            <div className='flex flex-col item-center justify-center px-5 gap-3 mt-5'>
                <p>Sign in to like videos, comment, and subscribe.</p>
                <SignButton />
            </div>
        </div>
    )
}

export default SidebarActive
