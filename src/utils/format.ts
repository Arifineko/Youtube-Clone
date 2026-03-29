import numeral from 'numeral'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'

dayjs.extend(relativeTime)

export const formatViews = (rawViews: string | undefined) => {
    return numeral(rawViews).format('0.[0]a') + ' views'
}

export const formatSubscribers = (subcriberCount: string | undefined) => {
    return numeral(subcriberCount).format('0.[0]a') + ' subscribers'
}

export const formatLikes = (likeCount: string | undefined) => {
    return numeral(likeCount).format('0.[0]a')
}

export const timeSince = (rawDate: string | undefined) => {
    return dayjs(rawDate).fromNow()
}
