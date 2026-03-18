import { useTrendingVideos } from '../hooks/useYoutube'
import VideoCard from './VideoCard'

const Content = () => {
    const { videos, channelPics, loading, error } = useTrendingVideos()

    if (loading) return <div className="pt-24 pl-20 italic">Loading...</div>
    if (error) return <div className="pt-24 pl-20 text-red-500">Error loading videos.</div>

    return (
        <div className='md:pl-20 mb-20 md:mb-0 pt-23 md:pt-30 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-rows-1 gap-4 gap-y-6 md:p-5'>
            {videos.map((video, key) => (
                <VideoCard
                    key={key}
                    video={video}
                    channelPic={channelPics[video.snippet.channelId]}
                />
            ))}
        </div>
    )
}
export default Content
