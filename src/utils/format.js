import numeral from 'numeral'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const formatViews = (numberString) => {
    return numeral(numberString).format('0.[0]a') + ' views'
}

export const formatSubscribers = (numberString) => {
    return numeral(numberString).format('0.[0]a') + ' subscribers'
}

export const formatLikes = (numberString) => {
    return numeral(numberString).format('0.[0]a')
}

export const timeSince = (dateString) => dayjs(dateString).fromNow()
