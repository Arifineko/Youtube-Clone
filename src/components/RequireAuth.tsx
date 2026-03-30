import SignButton from './SignButton'

export const RequireAuth = ({ Icon, title, subTitle }) => {
    return (
        <div className='flex flex-col justify-center items-center w-full min-h-[calc(100vh-80px)] md:pl-20 gap-4 p-6 text-center'>
            {Icon && <img src={Icon} alt="" className='w-16 h-16 mb-4' />}
            <h2 className='text-2xl font-normal text-gray-900'>{title}</h2>
            <p className='text-sm text-gray-600 max-w-sm mb-2'>{subTitle}</p>
            <SignButton />
        </div>
    )
}


