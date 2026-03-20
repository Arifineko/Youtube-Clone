import { formatViews, timeSince } from '../../utils/format'

const VideoInfo = ({ video, channelPic, type = 'home' }) => {
    if (type === 'search') {
        return (
            <div className="flex flex-col gap-1 flex-1 px-2 md:px-0">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-normal line-clamp-2 leading-tight">
                        {video.snippet.title}
                    </h3>
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                    <span>{formatViews(video.statistics?.viewCount || "123456")}</span>
                    <span>•</span>
                    <span>{timeSince(video.snippet.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2 py-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                        <img
                            src={channelPic}
                            alt={video.snippet.channelTitle}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-xs transition-colors">
                        {video.snippet.channelTitle}
                    </span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-1 md:line-clamp-2">
                    {video.snippet.description}
                </p>
            </div>
        )
    }

    if (type === 'watch') {
        return (
            <div className="flex lg:flex-col mb-4 mt-1 lg:mb-0 lg:mt-0 gap-2 lg:gap-0 flex-1 px-2 md:px-0 md:justify-center">
                <div className="lg:hidden flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                        <img
                            src={channelPic}
                            alt={video.snippet.channelTitle}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="text-sm font-normal line-clamp-2 leading-tight">
                            {video.snippet.title}
                        </h3>
                    </div>
                    <div>
                        <span className="hidden lg:block text-xs transition-colors">
                            {video.snippet.channelTitle}
                        </span>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                        <span className="lg:hidden text-xs transition-colors">
                            {video.snippet.channelTitle}
                        </span>
                        <span>{formatViews(video.statistics?.viewCount)}</span>
                        <span>•</span>
                        <span>{timeSince(video.snippet.publishedAt)}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-[48px_1fr] px-2 md:px-0 mt-3'>
            <div>
                <img
                    className='rounded-full w-10 h-10 object-cover'
                    src={channelPic}
                    alt=""
                />
            </div>
            <div>
                <div className='line-clamp-2 text-sm font-semibold'>
                    {video.snippet.title}
                </div>
                <p className='text-sm text-gray-500'>{video.snippet.channelTitle}</p>
                <div className='flex gap-2 text-gray-500'>
                    <p className='text-sm'>{formatViews(video.statistics?.viewCount)}</p>
                    <p className='text-sm'>• {timeSince(video.snippet.publishedAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoInfo
