import { catagoriesData } from "../data/catagoriesData"

const HeaderCatagories = () => {
    return (
        <div className='flex bg-white fixed left-0 md:left-16 top-[46px] md:top-[53px] right-0 px-3 py-2 z-20 gap-3 overflow-x-auto'>
            {catagoriesData.map((category, key) => (
                <div
                    key={key}
                    className='px-4 py-1.5 font-bold bg-gray-200 rounded-lg text-[12px] whitespace-nowrap cursor-pointer'
                >
                    {category.name}
                </div>
            ))}
        </div>
    )
}

export default HeaderCatagories
