import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonWatchPage = () => {
    return (
        <div className="md:pt-16 pt-14 lg:pl-18 lg:px-6 lg:pr-12 flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1 w-full lg:max-w-[calc(100%-420px)]">
                <div className="w-full flex justify-center">
                    <div className="w-full aspect-video overflow-hidden lg:rounded-lg">
                        <Skeleton height="100%" borderRadius={8} />
                    </div>
                </div>

                <div className="w-full mt-4 px-3 md:px-6 lg:px-0 flex gap-4 flex-col">
                    <Skeleton width="85%" height={22} />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Skeleton circle width={40} height={40} />
                            <div className="flex flex-col gap-1">
                                <Skeleton width={140} height={16} />
                                <Skeleton width={90} height={12} />
                            </div>
                            <Skeleton width={100} height={36} borderRadius={20} style={{ marginLeft: 16 }} />
                        </div>
                        <div className="flex items-center gap-2">
                            <Skeleton width={120} height={36} borderRadius={20} />
                            <Skeleton width={90} height={36} borderRadius={20} />
                            <Skeleton circle width={36} height={36} />
                        </div>
                    </div>

                    <div className="rounded-xl p-3" style={{ backgroundColor: '#f3f4f6' }}>
                        <div className="flex gap-2 mb-2">
                            <Skeleton width={80} height={14} />
                            <Skeleton width={100} height={14} />
                        </div>
                        <Skeleton count={3} height={14} />
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[400px] md:px-6 lg:px-0 flex flex-col gap-3">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex gap-2 flex-col lg:flex-row">
                        <div className="w-full lg:w-2/5 aspect-video">
                            <Skeleton height="100%" borderRadius={8} />
                        </div>
                        <div className="flex-1 flex flex-col gap-1 py-1">
                            <Skeleton width="90%" height={14} />
                            <Skeleton width="70%" height={14} />
                            <Skeleton width="60%" height={12} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkeletonWatchPage
