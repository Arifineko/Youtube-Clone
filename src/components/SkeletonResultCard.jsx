import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonResultCard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full md:w-2/5 flex-shrink-0 aspect-video">
                <Skeleton height="100%" borderRadius={12} />
            </div>
            <div className="flex-1 flex flex-col gap-2 py-1">
                <Skeleton width="90%" height={24} />
                <div className="flex items-center gap-2 mt-1">
                    <Skeleton width="100px" height={15} />
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <Skeleton circle width={24} height={24} />
                    <Skeleton width="150px" height={15} />
                </div>
                <div className="mt-3 hidden md:block">
                    <Skeleton width="80%" height={15} />
                    <Skeleton width="60%" height={15} />
                </div>
            </div>
        </div>
    )
}

export default SkeletonResultCard
