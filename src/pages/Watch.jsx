import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from '../components/SidebarActive'
import axios from 'axios'

const Watch = () => {
    const [searchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const [dataVideo, setDataVideo] = useState()
    const [channelPics, setChannelPics] = useState()

    const apiKey = import.meta.env.VITE_API_KEY
    const videoURL = 'https://www.googleapis.com/youtube/v3/videos'
    const channelURL = 'https://www.googleapis.com/youtube/v3/channels'

    const videoId = searchParams.get('v')

    useEffect(() => {
        async function getDetailsVideo() {
            try {
                const response = await axios.get(videoURL, {
                    params: {
                        part: 'snippet,statistics,contentDetails',
                        id: videoId,
                        key: apiKey,
                    },
                })
                const videoData = response.data.items[0]
                setDataVideo(videoData)

                if (videoData) {
                    const channelRes = await axios.get(channelURL, {
                        params: {
                            part: 'snippet,statistics',
                            id: videoData.snippet.channelId,
                            key: apiKey
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
                            <p>{channelPics?.statistics?.subscriberCount}</p>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div>
                        <p>{dataVideo?.statistics?.viewCount}</p>
                        <p>{dataVideo?.snippet?.publishedAt}</p>
                        <p>{dataVideo?.snippet?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch
