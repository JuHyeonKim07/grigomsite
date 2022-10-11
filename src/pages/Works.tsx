import axios from "axios";
import { useEffect, useState } from "react";
import '../css/Works.css';
import { Link } from "react-router-dom";
import { CategoryTabs } from '../component/CategoryTabs'
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector'
import { getVimeoList } from '../redux/videoList'


function Works() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state);

    useEffect(() => {
        dispatch(getVimeoList());
    }, [])

    return (
        <>
            <div className="title-container">
                <div className="title">
                    <span>WORKS</span>
                </div>
            </div>

            <CategoryTabs />

            <div className="imageBox">
                {loading ? (
                    <></>
                ) : (
                    data &&
                    data.map((value, index) => {
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

export default Works
