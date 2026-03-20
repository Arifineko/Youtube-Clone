import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from '../components/SidebarActive'
import { formatViews, formatSubscribers, timeSince, formatLikes } from '../utils/format'
import { useVideoDetails } from '../hooks/useYoutube'
import VideoThumbnail from '../components/VideoCard/VideoThumbnail'
import VideoInfo from '../components/VideoCard/VideoInfo'

const Watch = () => {
    const [searchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const videoId = searchParams.get('v')

    const { data, isLoading, isError } = useVideoDetails(videoId)

    const datas = {
        // 1. Array berisi 10 video
        videos: [
            {
                id: "vid_01",
                snippet: {
                    channelId: "ch_01",
                    title: "Panduan Lengkap Belajar React Context API",
                    channelTitle: "Frontend Indo",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v1/320/180" } },
                    publishedAt: "2024-03-20T10:00:00Z"
                }
            },
            {
                id: "vid_02",
                snippet: {
                    channelId: "ch_02",
                    title: "Setup Meja Kerja Minimalis untuk Programmer",
                    channelTitle: "Setup Inspiration",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v2/320/180" } },
                    publishedAt: "2024-03-19T12:00:00Z"
                }
            },
            {
                id: "vid_03",
                snippet: {
                    channelId: "ch_03",
                    title: "Cara Membuat Kopi Ala Cafe di Rumah",
                    channelTitle: "Barista Home",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v3/320/180" } },
                    publishedAt: "2024-03-18T09:00:00Z"
                }
            },
            {
                id: "vid_04",
                snippet: {
                    channelId: "ch_04",
                    title: "Review Jujur Mechanical Keyboard Low Budget",
                    channelTitle: "Tech Review",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v4/320/180" } },
                    publishedAt: "2024-03-17T08:00:00Z"
                }
            },
            {
                id: "vid_05",
                snippet: {
                    channelId: "ch_05",
                    title: "Tips Lolos Interview Coding di Startup",
                    channelTitle: "Career Path",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v5/320/180" } },
                    publishedAt: "2024-03-16T15:00:00Z"
                }
            },
            {
                id: "vid_06",
                snippet: {
                    channelId: "ch_06",
                    title: "Mencoba Masakan Terpedas di Jakarta",
                    channelTitle: "Food Hunter",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v6/320/180" } },
                    publishedAt: "2024-03-15T19:00:00Z"
                }
            },
            {
                id: "vid_07",
                snippet: {
                    channelId: "ch_07",
                    title: "Tutorial Next.js 14 Dashboard Lengkap",
                    channelTitle: "Dev Mastery",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v7/320/180" } },
                    publishedAt: "2024-03-14T11:00:00Z"
                }
            },
            {
                id: "vid_08",
                snippet: {
                    channelId: "ch_08",
                    title: "5 Destinasi Wisata Murah di Yogyakarta",
                    channelTitle: "Jalan-Jalan",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v8/320/180" } },
                    publishedAt: "2024-03-13T07:00:00Z"
                }
            },
            {
                id: "vid_09",
                snippet: {
                    channelId: "ch_09",
                    title: "Berhenti Kerja demi Membangun Startup Sendiri?",
                    channelTitle: "Founder Talks",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v9/320/180" } },
                    publishedAt: "2024-03-12T16:00:00Z"
                }
            },
            {
                id: "vid_10",
                snippet: {
                    channelId: "ch_10",
                    title: "Workout Rutin untuk yang Sibuk Ngantor",
                    channelTitle: "Healthy Life",
                    thumbnails: { medium: { url: "https://picsum.photos/seed/v10/320/180" } },
                    publishedAt: "2024-03-11T06:00:00Z"
                }
            }
        ],

        // 2. Object Mapping untuk channelPics (Key menggunakan channelId)
        channelPics: {
            "ch_01": "https://i.pravatar.cc/150?u=ch_01",
            "ch_02": "https://i.pravatar.cc/150?u=ch_02",
            "ch_03": "https://i.pravatar.cc/150?u=ch_03",
            "ch_04": "https://i.pravatar.cc/150?u=ch_04",
            "ch_05": "https://i.pravatar.cc/150?u=ch_05",
            "ch_06": "https://i.pravatar.cc/150?u=ch_06",
            "ch_07": "https://i.pravatar.cc/150?u=ch_07",
            "ch_08": "https://i.pravatar.cc/150?u=ch_08",
            "ch_09": "https://i.pravatar.cc/150?u=ch_09",
            "ch_10": "https://i.pravatar.cc/150?u=ch_10"
        }
    };

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
                        {datas?.videos?.map((video) => (
                            <>
                                <div className='flex gap-2 flex-col lg:flex-row'>
                                    <VideoThumbnail
                                        video={video}
                                        className="w-full lg:w-2/5"
                                    />
                                    <VideoInfo
                                        video={video}
                                        type="watch"
                                        channelPic={datas?.channelPics?.[video.snippet.channelId]}
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Watch
