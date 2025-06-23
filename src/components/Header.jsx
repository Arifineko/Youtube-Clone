import youtubeLogo from '../assets/logo/youtube-logo.svg'
import searchIcon from '../assets/icon/search-icon.svg'
import microphoneIcon from '../assets/icon/microphone-icon.svg'
import settingIcon from '../assets/icon/setting-icon.svg'
import ButtonMenu from './ButtonMenu'
import SignButton from './SignButton.jsx'
import HeaderCatagories from './HeaderCatagories.jsx'

const Header = () => {
    return (
        <>
            <div className='flex z-10 bg-white justify-between px-4 md:py-2 py-4 items-center fixed left-0 right-0 top-0'>
                <div className='flex gap-4'>
                    <ButtonMenu />
                    <img src={youtubeLogo} alt="" />
                </div>
                <div className="flex md:w-full lg:max-w-[600px] md:max-w-[400px] justify-center items-center md:px-4">
                    <div className="flex grow md:border md:border-gray-300 items-center rounded-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="hidden md:flex grow px-4 py-2 text-sm outline-none"
                        />
                        <div className="hidden md:flex h-6 w-px bg-gray-300 mx-2"></div>
                        <div className="flex md:px-4">
                            <img src={searchIcon} alt="Search" />
                        </div>
                    </div>
                    <div className="ml-4 hidden md:flex cursor-pointer">
                        <img src={microphoneIcon} alt="Mic" />
                    </div>
                </div>
                <div className='hidden md:flex  items-center gap-2'>
                    <img className='cursor-pointer' src={settingIcon} alt="" />
                    <SignButton />
                </div>
            </div>
            <HeaderCatagories />
        </>
    )
}

export default Header
