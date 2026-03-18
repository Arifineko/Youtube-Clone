import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_KEY, VIDEO_URL, CHANNEL_URL } from '../utils/youtubeApi'
import VideoCard from './VideoCard'

const Content = () => {

    const [youtube, setYoutube] = useState([])
    const [channelPics, setChannelPics] = useState({})

    useEffect(() => {
        axios.get(VIDEO_URL, {
            params: {
                part: 'snippet,statistics,contentDetails',
                chart: 'mostPopular',
                regionCode: 'ID',
                videoCategoryId: '0',
                maxResults: 45,
                key: API_KEY,
            },
        })
            .then(async (res) => {
                const items = res.data.items
                setYoutube(items)

                const channelIds = [...new Set(items.map(item => item.snippet.channelId))]
                const channelRes = await axios.get(CHANNEL_URL, {
                    params: {
                        part: 'snippet',
                        id: channelIds.join(','),
                        key: API_KEY
                    }
                })

                const profileMap = {}
                channelRes.data.items.forEach(channel => {
                    profileMap[channel.id] = channel.snippet.thumbnails.default.url
                })
                setChannelPics(profileMap)
            })
            .catch((err) => {
                console.error('Error fetching data:', err)
            })
    }, [])

    return (
        <div className='md:pl-20 mb-20 md:mb-0 pt-23 md:pt-30 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-rows-1 gap-4 gap-y-6 md:p-5'>
            {youtube.map((video, key) => (
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
