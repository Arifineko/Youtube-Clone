import youtubeLogo from '../assets/logo/youtube-logo.svg'
import searchIcon from '../assets/icon/search-icon.svg'
import microphoneIcon from '../assets/icon/microphone-icon.svg'
import settingIcon from '../assets/icon/setting-icon.svg'
import ButtonMenu from './ButtonMenu'
import SignButton from './SignButton.jsx'
import HeaderCatagories from './HeaderCatagories.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ catagory }) => {
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate()

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results?search_query=${searchInput}`)
    }


    return (
        <>
            <div className='flex z-10 bg-white justify-between px-4 md:py-2 py-4 items-center fixed left-0 right-0 top-0'>
                <div className='flex gap-4'>
                    <ButtonMenu />
                    <img src={youtubeLogo} alt="" />
                </div>
                <div className="flex md:w-full lg:max-w-[600px] md:max-w-[400px] justify-center items-center md:px-4">
                    <form onSubmit={handleSubmit} className="flex grow md:border md:border-gray-300 items-center rounded-full">
                        <input value={searchInput} onChange={handleSearchInput}
                            type="text"
                            placeholder="Search"
                            className="hidden md:flex grow px-4 py-2 text-sm outline-none"
                        />
                        <div className="hidden md:flex h-6 w-px bg-gray-300 mx-2"></div>
                        <button className="flex md:px-4">
                            <img src={searchIcon} alt="Search" />
                        </button>
                    </form>
                    <div className="ml-4 hidden md:flex cursor-pointer">
                        <img src={microphoneIcon} alt="Mic" />
                    </div>
                </div>
                <div className='hidden md:flex  items-center gap-2'>
                    <img className='cursor-pointer' src={settingIcon} alt="" />
                    <SignButton />
                </div>
            </div>
            {catagory && <HeaderCatagories />}
        </>
    )
}

export default Header
