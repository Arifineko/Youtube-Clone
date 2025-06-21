import { sidebarData } from '../data/sidebarData.js'

const Sidebar = () => {
    return (
        <div className="fixed left-0 bg-white right-0 bottom-0 md:top-0 md:mt-13.5 md:w-18">
            <div className='flex justify-around md:flex-col gap-4 pt-2'>
                {sidebarData.map((icon, key) => {
                    return (
                        <div key={key} className="flex flex-col gap-1 justify-center items-center py-2 px-5 hover:bg-gray-200 cursor-pointer text-[10px]">
                            <img className='h-6 w-6' src={icon.image} alt="" />
                            <p>{icon.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
