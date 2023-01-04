import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import { getYoutubeList_Videos } from '../redux/youtubeList_GetVideos';
import Loader from "./Loader";


interface propsTypes {
    playlistId: string
}

function YoutubeTab({ playlistId }: propsTypes) {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.youtube_VideosSlice);

    useEffect(() => {
        dispatch(getYoutubeList_Videos(playlistId))
    }, [])

    return (
        <>
            <div className="imageBox">
                {loading ? (
                    <>
                        <Loader />
                    </>
                ) : (
                    data &&
                    data.items.map((value, index) => {
                        if (Object.keys(value.snippet.thumbnails).length !== 0) {
                            return (
                                <div className="image" key={index}>
                                    <img className="image__img" src={value.snippet.thumbnails.maxres ? value.snippet.thumbnails.maxres.url : value.snippet.thumbnails.high.url} alt='bricks' />
                                    <Link to={`/Details/${value.snippet.resourceId.videoId}`}>
                                        <div className="image__overlay image__overlay--youtube">
                                            <div className="image__title">Grigom Pictures</div>
                                            <p className="image__description">
                                                {value.snippet.title}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })
                )}
            </div>
        </>
    )
}

export default YoutubeTab