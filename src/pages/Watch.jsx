import { useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from '../components/SidebarActive'
import { formatViews, formatSubscribers, timeSince, formatLikes } from '../utils/format'
import { useCategoryVideos, useVideoDetails } from '../hooks/useYoutube'
import VideoThumbnail from '../components/VideoCard/VideoThumbnail'
import VideoInfo from '../components/VideoCard/VideoInfo'

const Watch = () => {
    const [searchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const videoId = searchParams.get('v')

    const { data, isLoading, isError } = useVideoDetails(videoId)

    const categoryId = data?.video?.snippet?.categoryId

    const { data: videoCategory } = useCategoryVideos(categoryId)

    return (
        <>
            <Header catagory={false} />
            {menu && <SidebarActive />}

            {isLoading && <div className="pt-24 pl-20 italic">Loading...</div>}
            {isError && <div className="pt-24 pl-20 text-red-500">Error loading video.</div>}

            {!isLoading && !isError && (
                <div className="md:pt-16 pt-14 lg:pl-18 lg:px-6 lg:pr-12 flex flex-col lg:flex-row gap-6 items-start">
                    <div className="flex-1 w-full lg:max-w-[calc(100%-420px)]">
                        <div className="w-full flex justify-center">
                            <div className="w-full md:h-2/3 aspect-video overflow-hidden lg:rounded-lg">
                                <iframe
                                    className="w-full h-full border-none"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title="YouTube video"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="w-full mt-4 px-3 md:px-6 lg:px-0 flex gap-4 flex-col">
                            <h1 className='text-lg  font-bold leading-tight'>{data?.video?.snippet?.title}</h1>
                            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                                <div className='flex items-center gap-3 justify-between md:justify-normal'>
                                    <div className='flex gap-3'>
                                        <img
                                            src={data?.channelItems?.snippet?.thumbnails?.default?.url}
                                            alt=""
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div className='flex flex-col'>
                                            <p className='font-bold text-base leading-tight'>{data?.video?.snippet?.channelTitle}</p>
                                            <p className='text-xs font-normal text-gray-500'>{formatSubscribers(data?.channelItems?.statistics?.subscriberCount)}</p>
                                        </div>
                                    </div>
                                    <button className='ml-4 py-2 px-5 rounded-full bg-black text-white text-sm font-bold cursor-pointer hover:bg-zinc-800 transition-colors'>Subscribe</button>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center bg-gray-100 rounded-full'>
                                        <button className='flex items-center gap-2 py-2 px-3 hover:bg-gray-200 rounded-l-full transition-colors border-r border-gray-300'>
                                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                            <span className='text-sm font-bold'>{formatLikes(data?.video?.statistics?.likeCount)}</span>
                                        </button>
                                        <button className='py-2 px-3 hover:bg-gray-200 rounded-r-full transition-colors'>
                                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path></svg>
                                        </button>
                                    </div>
                                    <button className='flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-full hover:bg-gray-200 transition-colors'>
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                        <span className='text-sm font-bold'>Share</span>
                                    </button>
                                    <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'>
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'>
                                <div className='flex gap-2 font-bold text-sm mb-1'>
                                    <span>{formatViews(data?.video?.statistics?.viewCount)}</span>
                                    <span>{timeSince(data?.video?.snippet?.publishedAt)}</span>
                                </div>
                                <p className='text-sm whitespace-pre-wrap'>{data?.video?.snippet?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[400px] md:px-6 lg:px-0 md:grid md:grid-cols-3 lg:flex flex flex-col gap-3">
                        {videoCategory?.videos?.map((video) => (
                            <>
                                <Link to={`/watch?v=${video.id}`} key={video.id} className='flex gap-2 flex-col lg:flex-row cursor-pointer'>
                                    <VideoThumbnail
                                        video={video}
                                        className="w-full lg:w-2/5"
                                    />
                                    <VideoInfo
                                        video={video}
                                        type="watch"
                                        channelPic={videoCategory?.channelPics?.[video.snippet.channelId]}
                                    />
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Watch
