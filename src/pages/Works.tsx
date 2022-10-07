import axios from "axios";
import { useEffect, useState } from "react";
import { vimeoAcsses, youTubeAcsses } from '../apis/Acsses';
import '../css/Works.css';
import { Link } from "react-router-dom";
import { CategoryTabs } from '../component/CategoryTabs'
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector'
import { getVimeoList } from '../redux/videoList'

interface videoList_Interface {
    name: string
    pictures: {
        active: boolean
        base_link: string
        default_picture: boolean
        resource_key: string
        sizes: {
            height: number
            link: string
            width: number
        }[]
    }
    type: string
    uri: string
    embed: {
        html: string
    }
}



function Works() {
    const dispatch = useAppDispatch();
    const { loading, data } = useAppSelector((state) => state);



    console.log(data)

    const [videoList, setVideoList] = useState<videoList_Interface[]>([])

    useEffect(() => {
        dispatch(getVimeoList());
        
        // if (localStorage.getItem("videoList") === null) {
        //     getVimeoList();
        // } else {
        //     // 데이터가 있으면 그냥 있는 데이터 사용
        //     setVideoList(
        //         JSON.parse(localStorage.getItem('videoList') || "")
        //     )
        // }
    }, [])

    // const getVimeoList = async () => {
    //     await axios.get(`https://api.vimeo.com/users/${vimeoAcsses.userid}/videos`, {
    //         headers: {
    //             Authorization: `bearer ${vimeoAcsses.accessToken}`
    //         }
    //     }).then(res => {
    //         setVideoList(res.data.data)
    //         localStorage.setItem('videoList', JSON.stringify(res.data.data));
    //     }).catch(error => console.error(error))
    // }

    // const getYoutubeList = async () => {
    //     await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=${youTubeAcsses.apiKey}&playlistId=${youTubeAcsses.playlistId}&part=snippet&maxResults=30`, {
    //     }).then(res => {

    //     })
    // }

    return (
        <>
            <div className="title-container">
                <div className="title">
                    <span>WORKS</span>
                </div>
            </div>

            <CategoryTabs />

            <div className="imageBox">
                {videoList.map((value, index) => {
                    return (
                        <div className="image" key={index}>
                            <img className="image__img" src={value['pictures']['sizes'][5]['link']} alt="Bricks" />
                            <Link to={`/Details/${encodeURIComponent(value['embed']['html'])}`}>
                                <div className="image__overlay image__overlay--primary">
                                    <div className="image__title">Grigom Pictures</div>
                                    <p className="image__description">
                                        {value['name']}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Works
