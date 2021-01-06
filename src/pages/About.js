import React from "react";
import '../css/About.css';


function About() {
    return (
        <div className="info-div">

            <div className="info-image">
                <img className="shot_range" src="/image/shot_range.jpg" alt="shot_range" width="100%" />
            </div>

            <div className="info-written">
                <div className="info-title">
                    <span>
                        영상 프로덕션 <br/>
                        GRIGOM PICTURES는
                    </span>
                </div>
                <div className="info-content">
                    <div>
                        <span>수십개의 파트너 사와 함께 <br/></span>
                    </div>

                    <div>
                        <span>다양한 장르의 영상을 <br/></span>
                    </div>

                    <div>
                        <span>제작한 경험을 바탕으로 <br/></span>
                    </div>

                    <div>
                        <span>국내 공공기관 및 기업, <br/></span>
                    </div>

                    <div>
                        <span>바이럴, SNS, 홍보영상, <br/></span>
                    </div>

                    <div>
                        <span>행사영상, 유튜브 컨텐츠를 <br/></span>
                    </div>

                    <div>
                        <span>제작하고 있습니다.</span>
                    </div>

                    <div>
                        <img src="/logo/grigom_black.svg" alt="grigom_black" width="200px"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About