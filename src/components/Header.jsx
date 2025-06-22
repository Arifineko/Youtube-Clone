import youtubeLogo from '../assets/logo/youtube-logo.svg'
import searchIcon from '../assets/icon/search-icon.svg'
import microphoneIcon from '../assets/icon/microphone-icon.svg'
import settingIcon from '../assets/icon/setting-icon.svg'
import profileIcon from '../assets/icon/profile-icon.svg'
import ButtonMenu from './ButtonMenu'
import { catagoriesData } from '../data/catagoriesData.js'

const Header = () => {
    return (
        <>
            <div className='flex justify-between px-4 md:py-2 py-4 items-center fixed left-0 right-0 top-0'>
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
                    <div className="ml-4 hidden md:flex">
                        <img src={microphoneIcon} alt="Mic" />
                    </div>
                </div>
                <div className='hidden md:flex  items-center gap-2'>
                    <img src={settingIcon} alt="" />
                    <div className='flex gap-1 items-center rounded-full border border-gray-300 p-1 px-1.5'>
                        <img src={profileIcon} alt="" />
                        <p className='text-blue-700'>Sign In</p>
                    </div>
                </div>
            </div>
            <div className='flex fixed left-0 md:left-16 top-[52px] right-0 px-3 py-2 z-40 gap-3 overflow-x-auto'>
                {catagoriesData.map((category, key) => (
                    <div
                        key={key}
                        className='px-4 py-1.5 font-bold bg-gray-100 rounded-lg text-[12px] whitespace-nowrap cursor-pointer hover:bg-gray-200'
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Header
