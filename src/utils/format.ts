import numeral from 'numeral'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'

dayjs.extend(relativeTime)

export const formatViews = (rawViews: string) => {
    return numeral(rawViews).format('0.[0]a') + ' views'
}

export const formatSubscribers = (subcriberCount: string) => {
    return numeral(subcriberCount).format('0.[0]a') + ' subscribers'
}

export const formatLikes = (likeCount: string) => {
    return numeral(likeCount).format('0.[0]a')
}

export const timeSince = (rawDate: string) => {
    return dayjs(rawDate).fromNow()
}
