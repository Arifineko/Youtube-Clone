import { fetchVideos, fetchChannels, fetchVideoById, searchVideo, fetchVideoByCatagory } from "../services/youtubeService";
import { useQuery } from "@tanstack/react-query";
import { getChannelPicture } from "../utils/videoData";
import type { CategoryId, SearchQuery, VideoId } from "../types/params";
import type { YoutubeVideo } from "../types/youtube";

export const useTrendingVideos = () => {
    return useQuery({
        queryKey: ['videos', 'all'],
        queryFn: async () => {

            const videoItems: YoutubeVideo[] = await fetchVideos();
            const profileMap = await getChannelPicture(videoItems)

            return {
                videos: videoItems,
                channelPics: profileMap
            }
        },
        staleTime: 1000 * 60 * 10
    })
};

export const useCategoryVideos = (categoryId: CategoryId) => {
    return useQuery({
        queryKey: ['videos', categoryId],
        queryFn: async () => {
            const videoItems: YoutubeVideo[] = await fetchVideoByCatagory(categoryId)
            const profileMap = await getChannelPicture(videoItems)

            return {
                videos: videoItems,
                channelPics: profileMap
            }
        },
        staleTime: 1000 * 60 * 10,
        enabled: !!categoryId
    })
}

export const useVideoDetails = (videoId: VideoId) => {
    return useQuery({
        queryKey: ['video', videoId],
        queryFn: async () => {
            const videoItems: YoutubeVideo = await fetchVideoById(videoId);
            const channelItems: YoutubeVideo[] = await fetchChannels(videoItems.snippet.channelId);
            return {
                video: videoItems,
                channelItems: channelItems[0]
            }
        }
        ,
        staleTime: 1000 * 60 * 10,
        enabled: !!videoId
    })
};

export const useSearchVideo = (searchQuery: SearchQuery) => {
    return useQuery({
        queryKey: ['videos', searchQuery],
        queryFn: async () => {
            const response = await searchVideo(searchQuery)
            const videoItems: YoutubeVideo[] = response.data.items;
            const profileMap = await getChannelPicture(videoItems)

            return {
                items: videoItems,
                channelPics: profileMap
            }
        },
        staleTime: 1000 * 60 * 10
    })
}
