import React from "react";
import '../css/Details.css';



function Details({match}) {
    const isLoaded = match.params

    console.log(match.params)

    if(isLoaded) {
        console.log("Loaded")
        console.log(document.getElementsByTagName('iframe')[0])
    }else{
        console.log("Not Loaded")
    }

    // document.getElementsByTagName('iframe')[0].getAttributeNode("width").value = "30%"
    return (
        <div className="details">
            <div className="details_box">
                <div className="details_iframe"
                     dangerouslySetInnerHTML={{__html: decodeURIComponent(match.params.data)}}/>
            </div>
        </div>
    );
}

export default Details