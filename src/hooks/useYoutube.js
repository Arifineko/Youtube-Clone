import { useState, useEffect } from "react";
import { fetchVideos, fetchChannels, fetchVideoById } from "../services/youtubeService";

export const useTrendingVideos = () => {
    const [videos, setVideos] = useState([]);
    const [channelPics, setChannelPics] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTrending = async () => {
            try {
                setLoading(true);
                const videoItems = await fetchVideos();
                setVideos(videoItems);

                const channelIds = [...new Set(videoItems.map(item => item.snippet.channelId))];
                const channelItems = await fetchChannels(channelIds);

                const profileMap = {};
                channelItems.forEach(channel => {
                    profileMap[channel.id] = channel.snippet.thumbnails.default.url;
                });
                setChannelPics(profileMap);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadTrending();
    }, []);

    return { videos, channelPics, loading, error };
};

export const useVideoDetails = (videoId) => {
    const [video, setVideo] = useState(null);
    const [channel, setChannel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!videoId) return;

        const loadDetails = async () => {
            try {
                setLoading(true);
                const videoData = await fetchVideoById(videoId);
                setVideo(videoData);

                if (videoData) {
                    const channelItems = await fetchChannels(videoData.snippet.channelId);
                    setChannel(channelItems[0]);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadDetails();
    }, [videoId]);

    return { video, channel, loading, error };
};
