import youtubeLogo from '../assets/logo/youtube-logo.svg'
import searchIcon from '../assets/icon/search-icon.svg'
import microphoneIcon from '../assets/icon/microphone-icon.svg'
import settingIcon from '../assets/icon/setting-icon.svg'
import ButtonMenu from './ButtonMenu'
import SignButton from './SignButton.js'
import HeaderCatagories from './HeaderCatagories.js'
import { useState, type ChangeEvent, type FormEvent, type MouseEvent, type SubmitEventHandler } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ category }: { category: boolean }) => {
    const [searchInput, setSearchInput] = useState("")
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const navigate = useNavigate()

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/results?search_query=${searchInput}`)
            setIsSearchOpen(false)
        }
    }

    return (
        <>
            <div className='flex z-50 bg-white justify-between px-4 md:py-2 py-4 items-center fixed left-0 right-0 top-0 h-14 md:h-16'>
                <div className={`flex gap-4 items-center ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}>
                    <ButtonMenu />
                    <Link to={'/'} className='flex items-center'>
                        <img src={youtubeLogo} alt="Youtube Logo" className='h-5' />
                    </Link>
                </div>

                <div className={`flex items-center justify-center ${isSearchOpen ? 'w-full px-0' : 'md:w-full lg:max-w-[600px] md:max-w-[400px] md:px-4'}`}>
                    {isSearchOpen && (
                        <button onClick={() => setIsSearchOpen(false)} className='mr-3 md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                    )}
                    <form onSubmit={handleSubmit} className={`flex grow items-center rounded-full ${isSearchOpen ? 'border border-gray-300 px-2' : 'md:border md:border-gray-300'}`}>
                        <input value={searchInput} onChange={handleSearchInput}
                            type="text"
                            placeholder="Search YouTube"
                            className={`${isSearchOpen ? 'flex' : 'hidden md:flex'} grow px-4 py-2 text-sm outline-none bg-transparent`}
                            autoFocus={isSearchOpen}
                        />
                        <button
                            type="submit"
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                if (!isSearchOpen && window.innerWidth < 768) {
                                    e.preventDefault();
                                    setIsSearchOpen(true);
                                }
                            }}
                            className={`flex items-center justify-center ${isSearchOpen ? 'p-2' : 'p-2 md:px-4 md:py-2 md:bg-gray-50 md:rounded-r-full md:border-l md:border-gray-300'}`}
                        >
                            <img src={searchIcon} alt="Search" className='w-5 h-5' />
                        </button>
                    </form>
                    <div className="ml-4 hidden md:flex cursor-pointer p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <img src={microphoneIcon} alt="Mic" className='w-5 h-5' />
                    </div>
                </div>

                <div className={`items-center gap-2 ${isSearchOpen ? 'hidden md:flex' : 'hidden md:flex'}`}>
                    <img className='cursor-pointer p-2 hover:bg-gray-100 rounded-full' src={settingIcon} alt="Settings" />
                    <SignButton />
                </div>
            </div>
            {category && <HeaderCatagories />}
        </>
    )
}

export default Header
