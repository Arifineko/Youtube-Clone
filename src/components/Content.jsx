import axios from 'axios'
import { useEffect, useState } from 'react'
import numeral from 'numeral'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const Content = () => {
    const apiKey = 'AIzaSyCF2aMToSRZUCBux8O39qGBv1ZLS8b4ETg'
    const videoURL = 'https://www.googleapis.com/youtube/v3/videos'
    const channelURL = 'https://www.googleapis.com/youtube/v3/channels'

    const [youtube, setYoutube] = useState([])
    const [channelPics, setChannelPics] = useState({}) // Map channelId => profile image URL

    useEffect(() => {
        axios.get(videoURL, {
            params: {
                part: 'snippet,statistics,contentDetails',
                chart: 'mostPopular',
                regionCode: 'ID',
                videoCategoryId: '0',
                maxResults: 45,
                key: apiKey,
            },
        })
            .then(async (res) => {
                const items = res.data.items
                setYoutube(items)

                const channelIds = [...new Set(items.map(item => item.snippet.channelId))]
                const channelRes = await axios.get(channelURL, {
                    params: {
                        part: 'snippet',
                        id: channelIds.join(','),
                        key: apiKey
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

    const formatViews = (numberString) => {
        return numeral(numberString).format('0.[0]a') + ' views'
    }
    const timeSince = (dateString) => dayjs(dateString).fromNow()

    return (

        <div className='md:pl-20 mb-20 md:mb-0 pt-23 md:pt-30 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-rows-1 gap-4 gap-y-6 md:p-5'>
            {youtube.map((video, key) => (
                <div key={key}>
                    <div className="md:max-w-sm">
                        <div className="aspect-video rounded-xl md:overflow-hidden">
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={video.snippet.thumbnails.high.url}
                                    alt=''
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-[48px_1fr] px-2 md:px-0 mt-3'>
                        <div>
                            <img
                                className='rounded-full w-10'
                                src={channelPics[video.snippet.channelId] || ''}
                                alt=""
                            />
                        </div>
                        <div>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-sm font-semibold'
                            >
                                {video.snippet.title}
                            </a>
                            <p className='text-sm text-gray-500'>{video.snippet.channelTitle}</p>
                            <div className='flex gap-2 text-gray-500'>
                                <p className='text-sm'>{formatViews(video.statistics.viewCount)}</p>
                                <p className='text-sm'>• {timeSince(video.snippet.publishedAt)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content
