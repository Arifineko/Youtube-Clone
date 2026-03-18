import { Link } from 'react-router-dom'
import { formatViews, timeSince } from '../utils/format'

const VideoCard = ({ video, channelPic }) => {

    return (
        <Link to={`/watch?v=${video.id}`} className='cursor-pointer'>
            <div className="md:max-w-sm">
                <div className="aspect-video rounded-xl md:overflow-hidden">
                    <img
                        src={video.snippet.thumbnails.high.url}
                        alt=''
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className='grid grid-cols-[48px_1fr] px-2 md:px-0 mt-3'>
                <div>
                    <img
                        className='rounded-full w-10'
                        src={channelPic || ''}
                        alt=""
                    />
                </div>
                <div>
                    <div
                        className='line-clamp-2 text-sm font-semibold'
                    >
                        {video.snippet.title}
                    </div>
                    <p className='text-sm text-gray-500'>{video.snippet.channelTitle}</p>
                    <div className='flex gap-2 text-gray-500'>
                        <p className='text-sm'>{formatViews(video.statistics.viewCount)}</p>
                        <p className='text-sm'>• {timeSince(video.snippet.publishedAt)}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
