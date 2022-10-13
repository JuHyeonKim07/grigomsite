import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Works.css';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import { getYoutubeList } from '../redux/youtubeList';


function YoutubeTab() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.youtubeSlice);

    useEffect(() => {
        if (!data) {
            dispatch(getYoutubeList());
        }
    }, [])

    return (
        <>
            <div className="imageBox">
                {loading ? (
                    <></>
                ) : (
                    data &&
                    data.items.map((value, index) => {
                        if (Object.keys(value.snippet.thumbnails).length !== 0) {
                            return (
                                <div className="image" key={index}>
                                    <img className="image__img" src={value.snippet.thumbnails.maxres.url} alt='bricks' />

                                    <Link to={`/Details/youtube/${encodeURIComponent(`https://www.youtube.com/embed/${value.snippet.resourceId.videoId}`)}`}>
                                        <div className="image__overlay image__overlay--primary">
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