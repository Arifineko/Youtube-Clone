import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from '../components/SidebarActive'
import { formatViews, formatSubscribers, timeSince } from '../utils/format'
import { useVideoDetails } from '../hooks/useYoutube'

const Watch = () => {
    const [searchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const videoId = searchParams.get('v')

    const { data, isLoading, isError } = useVideoDetails(videoId)

    if (isLoading) return <div className="pt-24 pl-20 italic">Loading...</div>
    if (isError) return <div className="pt-24 pl-20 text-red-500">Error loading video.</div>

    return (
        <>
            <Header catagory={false} />
            {menu && <SidebarActive />}

            <div className="pt-12">
                <div className="w-full">
                    <div className="w-full aspect-video overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="w-full">
                    <h1>{data?.video?.snippet?.title}</h1>
                    <div>
                        <img
                            src={data?.channelItems?.snippet?.thumbnails?.default?.url}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p>{data?.video?.snippet?.channelTitle}</p>
                            <p>{formatSubscribers(data?.channelItems?.statistics?.subscriberCount)}</p>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div>
                        <p>{formatViews(data?.video?.statistics?.viewCount)}</p>
                        <p>{timeSince(data?.video?.snippet?.publishedAt)}</p>
                        <p>{data?.video?.snippet?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch
