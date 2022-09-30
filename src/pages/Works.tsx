import axios from "axios";
import { useEffect, useState } from "react";
import { vimeoAcsses } from '../apis/vimeoAcsses';
import '../css/Works.css';
import { Link } from "react-router-dom";


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
    const [videoList, setVideoList] = useState<videoList_Interface[]>([])

    useEffect(() => {
        if (localStorage.getItem("videoList") === null) {
            uploaded_List();
        } else {
            // 데이터가 있으면 그냥 있는 데이터 사용
            setVideoList(
                JSON.parse(localStorage.getItem('videoList') || "")
            )
        }
    }, [])


    const uploaded_List = async () => {
        await axios.get(`https://api.vimeo.com/users/${vimeoAcsses.userid}/videos`, {
            headers: {
                Authorization: `bearer ${vimeoAcsses.accessToken}`
            }
        }).then(res => {
            setVideoList(res.data.data)
            localStorage.setItem('videoList', JSON.stringify(res.data.data));
        }).catch(error => console.error(error))
    }

    return (
        <section>

            <div className="title-container">
                <div className="title">
                    <span>WORKS</span>
                </div>
            </div>

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
        </section>
    )
}

export default Works
