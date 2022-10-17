import { useEffect } from "react";
import '../css/Details.css';

type matchTypes = {
    match: {
        isExact: boolean
        params: {
            data: string
            type: string
        }
        path: string
        url: string
    }
}

function Details({ match }: matchTypes) {
    return (
        <div className="details">
            <div className="title-container">
                <div className="title">
                    <span>DETAILS</span>
                </div>
            </div>

            <div className="details_box">
                <div className="details_iframe"
                    dangerouslySetInnerHTML={{ __html: decodeURIComponent(match.params.data) }}>
                </div>
            </div>
        </div >
    );
}

export default Details
