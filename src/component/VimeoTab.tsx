import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Works.css';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import { getVimeoList } from '../redux/vimeoList';


function VimeoTab() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.vimeoSlice);

    useEffect(() => {
        if (!data) {
            dispatch(getVimeoList());
        }
    }, [])

    return (
        <>
            <div className="imageBox">
                {loading ? (
                    <></>
                ) : (
                    data &&
                    data.data.map((value, index) => {
                        return (
                            <div className="image" key={index}>
                                <img className="image__img" src={value['pictures']['sizes'][5]['link']} alt="Bricks" />
                                <Link to={`/Details/${encodeURIComponent(value['embed']['html'])}`}>
                                    <div className="image__overlay image__overlay--primary">
                                        <div className="image__title">Grigom Pictures</div>
                                        <p className="image__description">
                                            {value['name']}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default VimeoTab