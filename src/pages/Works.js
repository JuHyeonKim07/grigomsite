import React, {useEffect, useState, useCallback} from "react";
import '../css/Works.css';
import axios from "axios";
import {Link} from "react-router-dom";
import Details from "./Details";

function Works() {
    const accessToken = "da231ec06f876ff503b91d8152a722a2"
    const userid = '129526601'
    const [data, setData] = useState([]);
    // const [dataLength, dataLength] = useState([]);

    // useEffect는 비동기적으로 동작
    useEffect(() => {
        // get user all upload List
        async function uploaded_List() {
            await axios.get(`https://api.vimeo.com/users/${userid}/videos`, {
                headers: {
                    Authorization: `bearer ${accessToken}`
                }
            }).then(res => {
                setData(res.data.data)
                console.log(res.data.data)
            }).catch(error => console.error(error))
        }

        uploaded_List();
    }, []);


    useEffect(() => {
        if(0){
            localStorage.setItem('videoList', JSON.stringify(data))
        }
    }, [data])

    return (

        <section>

            <div className="title">
                <span>WORKS</span>
            </div>


            <div className="imageBox">
                {data.map((value, index) => {
                    return (
                        <div className="image" key={index}>
                            <img className="image__img" src={value['pictures']['sizes'][5]['link']} alt="Bricks"/>
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
