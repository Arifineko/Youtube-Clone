import axios from "axios"
import { Link, useSearchParams } from "react-router-dom"
import Header from "../components/Header";
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from "../components/SidebarActive";
import Sidebar from "../components/Sidebar";
import VideoInfo from "../components/VideoCard/VideoInfo";
import { useQuery } from "@tanstack/react-query";
import { fetchChannels } from "../services/youtubeService";
import VideoThumbnail from "../components/VideoCard/VideoThumbnail";

export const Result = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const searchQuery = searchParams.get('search_query')

    const API_KEY = import.meta.env.VITE_API_KEY

    const { data, isLoading, isError } = useQuery({
        queryKey: ['videos', searchQuery],
        queryFn: async () => {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: searchQuery,
                    type: 'video',
                    maxResults: 10,
                    key: API_KEY
                }
            })

            const videoItems = response.data.items;
            const channelIds = [...new Set(videoItems.map(item => item.snippet.channelId))];
            const channelItems = await fetchChannels(channelIds);

            const profileMap = {};
            channelItems.forEach(channel => {
                profileMap[channel.id] = channel.snippet.thumbnails.default.url;
            });

            return {
                items: videoItems,
                channelPics: profileMap
            }
        },
        staleTime: 1000 * 60 * 10,
    })

    if (isLoading) return <div className="pt-24 pl-20 italic">Loading...</div>
    if (isError) return <div className="pt-24 pl-20 text-red-500">Error loading videos.</div>

    return (
        <>
            <Header catagory={true} />
            {menu ? <SidebarActive /> : <Sidebar />}
            <div className="md:pl-20 mb-20 md:mb-0 pt-23 md:pt-30 gap-4 flex flex-col md:p-5">
                {
                    data?.items.map((video) => (
                        <Link to={`/watch?v=${video.id.videoId}`} className='cursor-pointer'>
                            <div key={video.id.videoId} className="flex flex-col md:flex-row gap-4 cursor-pointer">
                                <div className="w-full md:w-2/5 flex-shrink-0">
                                    <VideoThumbnail
                                        video={video}
                                        className="w-full"
                                    />
                                </div>
                                <VideoInfo
                                    video={video}
                                    type="search"
                                    channelPic={data?.channelPics?.[video.snippet.channelId]}
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
