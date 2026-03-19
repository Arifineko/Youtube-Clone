import { Link } from 'react-router-dom'
import VideoThumbnail from './VideoThumbnail'
import VideoInfo from './VideoInfo'

const VideoCard = ({ video, channelPic }) => {

    return (
        <Link to={`/watch?v=${video.id}`} className='cursor-pointer'>
            <VideoThumbnail video={video} />
            <VideoInfo 
                video={video} 
                channelPic={channelPic} 
                type="home" 
            />
        </Link>
    )
}

export default VideoCard
