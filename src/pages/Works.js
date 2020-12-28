import React, {useEffect, useState} from "react";
import '../css/Works.css';
import axios from "axios";


function Works() {
    const accessToken = "da231ec06f876ff503b91d8152a722a2"
    const userid = '129526601'
    const [data, setData] = useState({ hits: [] });

    // useEffect는 비동기적으로 동작
    useEffect(() => {
        // get user all upload List
        async function uploaded_List() {
            await axios.get(`https://api.vimeo.com/users/${userid}/videos`, {
                headers: {
                    Authorization: `bearer ${accessToken}`
                }
            }).then(res => {
                console.log(res.data.data)
                setData(res.data.data)
                console.log(data)
            }).catch(error => console.error(error))
        }
        uploaded_List();


        // async function uploaded_List() {
        //     const result = await axios.get(`https://api.vimeo.com/users/${userid}/videos`, {
        //         headers: {
        //             Authorization: `bearer ${accessToken}`
        //         }
        //     })
        //     setData(result.data.data);
        //     console.log(data)
        // }
        // uploaded_List();
    }, []);


    return (
        <section>
            {/*<div className="imageBox">*/}
            {/*    {data.hits.map(value => {*/}
            {/*        return (*/}
            {/*            <div className='image'>*/}
            {/*                <img src={value['pictures']['sizes'][5]['link']} />*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
        </section>
    )
}

export default Works
