import React, { Component } from "react";
import '../css/Works.css';
import axios from "axios";
import {Link} from "react-router-dom";



const accessToken = "da231ec06f876ff503b91d8152a722a2"
const userid = '129526601'
class Works extends Component{
    constructor(props){
        super(props)
        this.state ={
            videoList : []
        }
    }

    componentDidMount(){
        if (localStorage.getItem("videoList") === null) {
            this.uploaded_List();
        } else {
            // 데이터가 있으면 그냥 있는 데이터 사용
            this.setState({
                videoList : JSON.parse(localStorage.getItem('videoList'))
            })
        }
    }

    uploaded_List = async () => {
        await axios.get(`https://api.vimeo.com/users/${userid}/videos`, {
            headers: {
                Authorization: `bearer ${accessToken}`
            }
        }).then(res => {
            this.setState({
                videoList : res.data.data
            })
            localStorage.setItem('videoList', JSON.stringify(res.data.data));
        }).catch(error => console.error(error))
    }

    render(){
        // console.log(this.props);
        const { videoList } = this.state
        return(
            <section>

            <div className="title">
                <span>WORKS</span>
            </div>


            <div className="imageBox">
                {videoList.map((value, index) => {
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
}

export default Works
