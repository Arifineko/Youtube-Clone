import { fetchVideos, fetchChannels, fetchVideoById } from "../services/youtubeService";
import { useQuery } from "@tanstack/react-query";

export const useTrendingVideos = () => {
    return useQuery({
        queryKey: ['videos', 'all'],
        queryFn: async () => {

            const videoItems = await fetchVideos();
            const channelIds = [...new Set(videoItems.map(item => item.snippet.channelId))];
            const channelItems = await fetchChannels(channelIds);

            const profileMap = {};
            channelItems.forEach(channel => {
                profileMap[channel.id] = channel.snippet.thumbnails.default.url;
            });

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
            const videoData = await fetchVideoById(videoId);
            const channelItems = await fetchChannels(videoData.snippet.channelId);
            return {
                video: videoData,
                channelItems: channelItems[0]
            }
        }
        ,
        staleTime: 1000 * 60 * 10
    })
};
