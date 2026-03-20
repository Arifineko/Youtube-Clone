import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
const VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos'
const CHANNEL_URL = 'https://www.googleapis.com/youtube/v3/channels'

export const fetchVideos = async () => {
    const response = await axios.get(VIDEO_URL, {
        params: {
            part: 'snippet,statistics,contentDetails',
            chart: 'mostPopular',
            regionCode: 'ID',
            videoCategoryId: '0',
            maxResults: 45,
            key: API_KEY,
        },
    })
    return response.data.items
}

export const fetchVideoById = async (videoId) => {
    const response = await axios.get(VIDEO_URL, {
        params: {
            part: 'snippet,statistics,contentDetails',
            id: videoId,
            key: API_KEY,
        },
    })
    return response.data.items[0]
}

export const fetchChannels = async (channelIds) => {
    const response = await axios.get(CHANNEL_URL, {
        params: {
            part: 'snippet,statistics',
            id: Array.isArray(channelIds) ? channelIds.join(',') : channelIds,
            key: API_KEY
        }
    })
    return response.data.items
}

export const searchVideo = (searchQuery) => {
    return axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            q: searchQuery,
            type: 'video',
            maxResults: 10,
            key: API_KEY
        }
    })
}
