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

    const targetStyle = { width: "100%", height: "100vh", backgroundColor : 'green' };



    const useIntersectionObserver = ({
        root,
        rootMargin = '0px',
        threshold = 0,
        onIntersect,
    }: useIntersectionObserverProps) => {
        const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

        useEffect(() => {
            if (!target) return;        // 감지할 대상이 falsy하면 observer를 생성, 이용하지 못하도록 반환하는 역할을 한다.

            const observer: IntersectionObserver = new IntersectionObserver(        // 관찰자
                onIntersect,
                { root, rootMargin, threshold  }                                    // 뷰포트 대신 사용할 요소 / root 에 margin / 가기성 조절 0 ~ 1까지
            );

            observer.observe(target);
            return () => observer.unobserve(target);                                // 관찰 중지
        }, [onIntersect, root, rootMargin, target, threshold]);

        return { setTarget };
    };

    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting, intersectionRatio }]) => {   // 관찰 대상의 루트 요소, 교차 상태로 들어가는가의 여부 (boolean)
        console.log(`감지결과 : ${isIntersecting} ${intersectionRatio}`);
    };

    const { setTarget } = useIntersectionObserver({ onIntersect });


    useEffect(() => {
        if (!data) {
            dispatch(getYoutubeList_Product(playlistId))
        }
    }, [])

    return (

        <>
            <div ref={setTarget} style={targetStyle}></div>
            {/* <div className="imageBox">
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
            </div> */}
        </>
    )
}

export default YoutubeTab