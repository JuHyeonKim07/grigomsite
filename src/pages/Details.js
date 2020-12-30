import React, {useEffect} from "react";
import '../css/Details.css';

function Details({match}) {
    // useEffect는 비동기적으로 동작
    useEffect(() => {
        document.getElementsByTagName('iframe')[0].width = "1000px"
        document.getElementsByTagName('iframe')[0].height = "534px"
    }, []);
    return (
        <div className="details">
            <div className="title">
                <span>Details</span>
            </div>

            <div className="details_box">
                <div className="details_iframe"
                     dangerouslySetInnerHTML={{__html: decodeURIComponent(match.params.data)}}>
                </div>
            </div>
        </div>
    );
}

export default Details