import { fetchChannels } from "../services/youtubeService";

export const getChannelPicture = async (videoItems) => {
    const channelIds = [...new Set(videoItems.map(item => item.snippet.channelId))];
    const channelItems = await fetchChannels(channelIds);

    const profileMap = {};
    channelItems.forEach(channel => {
        profileMap[channel.id] = channel.snippet.thumbnails.default.url;
    });

    return profileMap
}