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
                <div className="details_iframe">
                    <iframe id="player" src={`https://www.youtube.com/embed/${match.params.data}`} frameBorder="0"></iframe>
                </div>
            </div>
        </div >
    );
}

export default Details
