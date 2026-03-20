import { Link, useSearchParams } from "react-router-dom"
import Header from "../components/Header";
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from "../components/SidebarActive";
import Sidebar from "../components/Sidebar";
import VideoInfo from "../components/VideoCard/VideoInfo";
import VideoThumbnail from "../components/VideoCard/VideoThumbnail";
import { useSearchVideo } from "../hooks/useYoutube";
import SkeletonResultCard from "../components/skeleton/SkeletonResultCard";

export const Result = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const searchQuery = searchParams.get('search_query')

    const { data, isLoading, isError } = useSearchVideo(searchQuery)
    return (
        <>
            <Header catagory={true} />
            {menu ? <SidebarActive /> : <Sidebar />}
            <div className="md:pl-20 mb-20 md:mb-0 pt-23 md:pt-30 gap-4 flex flex-col md:p-5">
                {isLoading && (
                    <div className="flex flex-col gap-6">
                        <SkeletonResultCard />
                    </div>
                )}
                {isError && <div className="pt-24 pl-20 text-red-500">Error loading videos.</div>}
                {!isLoading && !isError && data?.items?.map((video) => (
                    <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId} className='cursor-pointer'>
                        <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
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
                ))}
            </div>
        </>
    )
}
