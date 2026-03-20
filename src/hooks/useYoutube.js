import { fetchVideos, fetchChannels, fetchVideoById, searchVideo } from "../services/youtubeService";
import { useQuery } from "@tanstack/react-query";
import { getChannelPicture } from "../utils/videoData";

export const useTrendingVideos = () => {
    return useQuery({
        queryKey: ['videos', 'all'],
        queryFn: async () => {

            const videoItems = await fetchVideos();
            const profileMap = await getChannelPicture(videoItems)

            return {
                videos: videoItems,
                channelPics: profileMap
            }
        },
        staleTime: 1000 * 60 * 10
    })
};

export const useVideoDetails = (videoId) => {
    return useQuery({
        queryKey: ['video', videoId],
        queryFn: async () => {
            const videoItems = await fetchVideoById(videoId);
            const channelItems = await fetchChannels(videoItems.snippet.channelId);
            return {
                video: videoItems,
                channelItems: channelItems[0]
            }
        }
        ,
        staleTime: 1000 * 60 * 10
    })
};

export const useSearchVideo = (searchQuery) => {
    return useQuery({
        queryKey: ['videos', searchQuery],
        queryFn: async () => {
            const response = await searchVideo(searchQuery)
            const videoItems = response.data.items;
            const profileMap = await getChannelPicture(videoItems)


            return {
                items: videoItems,
                channelPics: profileMap
            }
        },
        staleTime: 1000 * 60 * 10
    })
}
