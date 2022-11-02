import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Works.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { getYoutubeList_Personal } from '../../redux/youtubeList_Personal';
import { getYoutubeList_Product } from '../../redux/youtubeList_Product';
import Loader from "../Loader";


function ViedoList() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.youtube_PersonalSlice);


    useEffect(() => {
        if (!data) {
            // Action
            dispatch(getYoutubeList_Personal());
        }
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
                                    <img className="image__img" src={value.snippet.thumbnails.maxres.url} alt='bricks' />
                                    <Link to={`/Details/youtube/${encodeURIComponent(
                                        `<iframe id="player" type="text/html" 
                                        src="http://www.youtube.com/embed/${value.snippet.resourceId.videoId}"
                                        frameborder="0"></iframe>`
                                    )}`}>
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

export default ViedoList