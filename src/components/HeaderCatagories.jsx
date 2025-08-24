import { useState } from "react";
import { catagoriesData } from "../data/catagoriesData"

const HeaderCatagories = () => {
    const [active, setActive] = useState(catagoriesData[0]?.name || "");

    return (
        <div className="flex bg-white fixed left-0 md:left-16 top-[46px] md:top-[53px] right-0 px-3 py-2 z-20 gap-3 overflow-x-auto">
            {catagoriesData.map((category, key) => {
                const isActive = active === category.name;
                return (
                    <button
                        key={key}
                        onClick={() => setActive(category.name)}
                        className={`px-4 py-1.5 font-bold rounded-lg text-[12px] whitespace-nowrap cursor-pointer transition 
                        ${isActive
                                ? "bg-black text-white"
                                : "bg-gray-100"
                            }`}
                    >
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
}

export default HeaderCatagories
