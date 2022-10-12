import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Works.css';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import { getYoutubeList } from '../redux/youtubeList';


function YoutubeTab() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.youtubeSlice);

    useEffect(() => {
        dispatch(getYoutubeList());
    }, [])

    console.log(data, loading, error)

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