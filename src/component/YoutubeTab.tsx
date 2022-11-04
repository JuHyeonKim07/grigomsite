import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import '../css/Works.css';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import { getYoutubeList_Product } from '../redux/youtubeList_Product';
import Loader from "./Loader";


interface propsTypes {
    playlistId: string
}

interface useIntersectionObserverProps {
    root?: null;
    rootMargin?: string;
    threshold?: number;
    onIntersect: IntersectionObserverCallback;
}

function YoutubeTab({ playlistId }: propsTypes) {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.youtube_ProductSlice);
    const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
    let observer: IntersectionObserver


    useEffect(() => {
        dispatch(getYoutubeList_Product(playlistId))
    }, [])

    useEffect(() => {
        let observer: IntersectionObserver;
        if (target) {
            const onIntersect : IntersectionObserverCallback = async ([entry], observer) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    // await fetchData();
                    console.log('hello')
                    observer.observe(entry.target);
                }
            };
            observer = new IntersectionObserver(onIntersect, { threshold: 1 }); // 추가된 부분
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
    }, [target]);


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
                                <div className="image" key={index} ref={setTarget}>
                                    <img className="image__img" src={value.snippet.thumbnails.maxres ? value.snippet.thumbnails.maxres.url : value.snippet.thumbnails.high.url} alt='bricks' />
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

export default YoutubeTab