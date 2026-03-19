import VideoCard from './VideoCard/VideoCard'
import { useTrendingVideos } from '../hooks/useYoutube'

const Content = () => {
    const { data, isLoading, isError } = useTrendingVideos();

    if (isLoading) return <div className="pt-24 pl-20 italic">Loading...</div>
    if (isError) return <div className="pt-24 pl-20 text-red-500">Error loading videos.</div>

    return (
        <div className='md:pl-20 mb-20 md:mb-0 pt-23 md:pt-30 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-rows-1 gap-4 gap-y-6 md:p-5'>
            {data?.videos?.map((video) => (
                <VideoCard
                    key={video.id}
                    video={video}
                    channelPic={data?.channelPics?.[video.snippet.channelId]}
                />
            ))}
        </div>
    )
}
export default Content
