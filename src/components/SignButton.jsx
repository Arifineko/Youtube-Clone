import profileIcon from '../assets/icon/profile-icon.svg'

const SignButton = () => {
    return (
        <div className='flex  w-fit cursor-pointer gap-1 items-center rounded-full border border-gray-300 p-1 px-1.5'>
            <img src={profileIcon} alt="" />
            <p className='text-blue-700'>Sign In</p>
        </div>
    )
}

export default SignButton
