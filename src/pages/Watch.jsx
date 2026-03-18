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

    const { video: dataVideo, channel: channelPics, loading, error } = useVideoDetails(videoId)

    if (loading) return <div className="pt-24 pl-20 italic">Loading...</div>
    if (error) return <div className="pt-24 pl-20 text-red-500">Error loading video.</div>

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
                    <h1>{dataVideo?.snippet?.title}</h1>
                    <div>
                        <img
                            src={channelPics?.snippet?.thumbnails?.default?.url}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p>{dataVideo?.snippet?.channelTitle}</p>
                            <p>{formatSubscribers(channelPics?.statistics?.subscriberCount)}</p>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div>
                        <p>{formatViews(dataVideo?.statistics?.viewCount)}</p>
                        <p>{timeSince(dataVideo?.snippet?.publishedAt)}</p>
                        <p>{dataVideo?.snippet?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch
