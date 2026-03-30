import homeIcon from '../assets/icon/home-icon.svg'
import subscriptionIcon from '../assets/icon/subscription-icon.svg'
import shortIcon from '../assets/icon/short-icon.svg'
import profileIconMobile from '../assets/icon/profile-icon-mobile.svg'


export interface SidebarData {
    name: string;
    image: string
    path: string;
}


export const sidebarData: SidebarData[] = [
    {
        name: "Home",
        image: homeIcon,
        path: "/",
    },
    {
        name: "Shorts",
        image: shortIcon,
        path: "/shorts",
    },
    {
        name: "Subscriptions",
        image: subscriptionIcon,
        path: "/feed/subscriptions",
    },
    {
        name: "You",
        image: profileIconMobile,
        path: "/feed/you",
    },
];

export const sidebarDataActive: SidebarData[] = [
    {
        name: "Home",
        image: homeIcon,
        path: "/",
    },
    {
        name: "Shorts",
        image: shortIcon,
        path: "/shorts",
    },
    {
        name: "Subscriptions",
        image: subscriptionIcon,
        path: "/feed/subscriptions",
    },
]