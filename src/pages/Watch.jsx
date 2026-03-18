import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from '../components/SidebarActive'
import axios from 'axios'
import { formatViews, formatSubscribers, timeSince } from '../utils/format'
import { API_KEY, VIDEO_URL, CHANNEL_URL } from '../utils/youtubeApi'

const Watch = () => {
    const [searchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const [dataVideo, setDataVideo] = useState()
    const [channelPics, setChannelPics] = useState()


    const videoId = searchParams.get('v')

    useEffect(() => {
        async function getDetailsVideo() {
            try {
                const response = await axios.get(VIDEO_URL, {
                    params: {
                        part: 'snippet,statistics,contentDetails',
                        id: videoId,
                        key: API_KEY,
                    },
                })
                const videoData = response.data.items[0]
                setDataVideo(videoData)

                if (videoData) {
                    const channelRes = await axios.get(CHANNEL_URL, {
                        params: {
                            part: 'snippet,statistics',
                            id: videoData.snippet.channelId,
                            key: API_KEY
                        }
                    })
                    setChannelPics(channelRes.data.items[0])
                }
            } catch (error) {
                console.error("Error fetching video/channel details:", error)
            }
        }

        getDetailsVideo()
    }, [videoId])

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
