import { fetchChannels } from "../services/youtubeService";
import type { YoutubeVideo } from "../types/youtube";

type ProfileMap = {
    [channelId: string]: string;
};

export const getChannelPicture = async (videoItems: YoutubeVideo[]) => {
    const channelIds = [...new Set(videoItems.map(item => item.snippet.channelId))];
    const channelItems: YoutubeVideo[] = await fetchChannels(channelIds);

    const profileMap: ProfileMap = {};
    channelItems.forEach(channel => {
        profileMap[channel.id] = channel.snippet.thumbnails.default.url;
    });

    return profileMap
}