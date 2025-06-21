import channel1 from '../assets/channel-profile/channel-1.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Content = () => {
    const apiKey = 'AIzaSyCF2aMToSRZUCBux8O39qGBv1ZLS8b4ETg'
    const videoURL = 'https://www.googleapis.com/youtube/v3/videos'
    const channelURL = 'https://www.googleapis.com/youtube/v3/channels'

    const [youtube, setYoutube] = useState([])

    useEffect(() => {
        axios
            .get(videoURL, {
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    regionCode: 'ID',
                    videoCategoryId: '0',
                    maxResults: 20,
                    key: apiKey,
                },
            })
            .then((res) => {
                setYoutube(res.data.items)
                console.log(res.data.items)
            })
            .catch((err) => {
                console.error('Error fetching data:', err)
            })

    }, [])

    return (
        <div className='pl-20 pt-15 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-rows-1 gap-4 gap-y-6 p-5'>
            {
                youtube.map((video, key) => {
                    return <div key={key}>
                        <div className="max-w-sm">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img
                                    src={video.snippet.thumbnails.high.url}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-[48px_1fr] mt-2'>
                            <div>
                                <img className='rounded-full' src={channel1} alt="" />
                            </div>
                            <div>
                                <p className='text-sm font-bold mb-1.5'>{video.snippet.title} </p>
                                <p className='text-sm text-gray-500'>{video.snippet.channelTitle}</p>
                                <div className='flex gap-2 text-gray-500'>
                                    <p>views</p>
                                    <p>time uploaded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Content
