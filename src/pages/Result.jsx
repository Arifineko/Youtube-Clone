import axios from "axios"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import videoData from '../videoData.json';
import Header from "../components/Header";
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import SidebarActive from "../components/SidebarActive";
import Sidebar from "../components/Sidebar";

export const Result = () => {
    const [data, setData] = useState(videoData)
    const [searchParams, setSearchParams] = useSearchParams()
    const { menu } = useContext(MenuContext)
    const searchQuery = searchParams.get('search_query')

    const API_KEY = import.meta.env.VITE_API_KEY

    // const getVideoBySearch = async () => {
    //     try {
    //         const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    //             params: {
    //                 part: 'snippet',
    //                 q: searchQuery,
    //                 type: 'video',
    //                 maxResults: 2,
    //                 key: API_KEY
    //             }
    //         })

    //         const response = JSON.parse()

    //         // setData(response.data.items)
    //         console.log(response.data.items)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // getVideoBySearch()

    return (
        <>
            <Header catagory={true} />
            {menu ? <SidebarActive /> : <Sidebar />}
            <div>Result</div>
        </>
    )
}
