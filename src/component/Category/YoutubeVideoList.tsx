import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { getYoutubeListVideosAction } from '../../redux/youtubeListGetVideos';

interface propsTypes {
    playlistId: string;
}

function YoutubeVideoList({ playlistId }: propsTypes) {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.youtubeVideosList);

    useEffect(() => {
        dispatch(getYoutubeListVideosAction(playlistId));
    }, [dispatch, playlistId]);

    if (loading) {
        return <div className="centered">Loading videos...</div>;
    }

    if (error) {
        return <div className="centered">영상을 불러오던 중 오류가 발생했습니다.<br/>새로고침 해주세요.</div>;
    }

    return (
        <>
            <div className="imageBox">
                {data && data.items.map((value, index) => (
                    Object.keys(value.snippet.thumbnails).length !== 0 && (
                        <div className="image" key={index}>
                            <img
                                className="image__img"
                                src={value.snippet.thumbnails.maxres ? value.snippet.thumbnails.maxres.url : value.snippet.thumbnails.high.url}
                                alt='thumbnail'
                            />
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
                ))}
            </div>
        </>
    );
}

export default YoutubeVideoList;
