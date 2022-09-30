import React from "react";
import '../css/Brand.css';

const brandList = [
    { src: "/logo/koreaculture_logo.png", alt: "culturekorea_logo" },
    { src: "/logo/danawa_logo.jpg", alt: "danawa_logo" },
    { src: "/logo/dyson_logo.png", alt: "dyson_logo" },
    { src: "/logo/hustorm_logo.png", alt: "hustorm_logo" },
    { src: "/logo/ksia_logo.png", alt: "ksia_logo" },
    { src: "/logo/ksif_logo.jpg", alt: "ksif_logo" },
    { src: "/logo/kspo_logo.png", alt: "kspo_logo" },
    { src: "/logo/knrea_logo.jpg", alt: "knrea_logo" },
    { src: "/logo/kyobo_logo.png", alt: "kyobo_logo" },
    { src: "/logo/samsung_card_logo.png", alt: "samsung_card_logo" },
    { src: "/logo/sk_dnd_logo.png", alt: "sk_dnd_logo" },
    { src: "/logo/tmck_logo.png", alt: "tmck_logo" },
    { src: "/logo/tupperwarebrands_logo.png", alt: "tupperwarebrands_logo" },
    { src: "/logo/hyundai_logo.png", alt: "hyundai_logo" },
    { src: "/logo/pubg_logo.png", alt: "pubg_logo" },
    { src: "/logo/seagate_logo.png", alt: "seagate_logo" },
]

const Brands = () => {
    return (
        <div>
            <div className="title-container">
                <div className="title">
                    <span>BRANDS</span>
                </div>
            </div>

            <div className="brand-list-box">
                {brandList.map((value, index) => (
                    <div key={index} className="brand-list-logo">
                        <img src={value['src']} alt={value['alt']} width="100%" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands