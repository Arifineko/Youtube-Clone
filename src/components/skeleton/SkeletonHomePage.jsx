import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonHomePage = () => {
    return (
        <>
            {[...Array(12)].map((_, i) => (
                <div key={i} className="flex flex-col">
                    <div className="aspect-video w-full">
                        <Skeleton height="100%" borderRadius={12} />
                    </div>
                    <div className="grid grid-cols-[48px_1fr] gap-3 mt-3">
                        <div className="flex justify-center">
                            <Skeleton circle width={40} height={40} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Skeleton width="100%" height={18} />
                            <Skeleton width="70%" height={14} />
                            <Skeleton width="50%" height={14} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SkeletonHomePage
