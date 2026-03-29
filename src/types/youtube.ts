export interface YoutubeThumbnail {
    url: string;
    width?: number;
    height?: number;
}

export interface YoutubeSnippet {
    title: string;
    description: string;
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    thumbnails: {
        default: YoutubeThumbnail;
        medium: YoutubeThumbnail;
        high: YoutubeThumbnail;
    };
    categoryId: string;
}

export interface YoutubeStatistics {
    viewCount: string;
    likeCount?: string;
}

export interface YoutubeVideo {
    id: string;

    snippet: YoutubeSnippet;

    statistics: YoutubeStatistics;

    contentDetails?: {
        duration: string;
        definition: string;
    };
}
