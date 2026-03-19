
const VideoThumbnail = ({ video, className }) => {
    return (
        <div className={className || "md:max-w-sm"}>
            <div className="aspect-video rounded-xl md:overflow-hidden relative z-0">
                <img
                    src={video?.snippet?.thumbnails?.high?.url}
                    alt=''
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default VideoThumbnail
