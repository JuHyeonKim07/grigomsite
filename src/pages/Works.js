import React from "react";
import '../css/Works.css';

const imageList = [
    {imageSrc: 'a', projectName: '', url: ''},
    {imageSrc: 'b', projectName: '', url: ''},
    {imageSrc: 'c', projectName: '', url: ''},
    {imageSrc: 'd', projectName: '', url: ''},
    {imageSrc: 'e', projectName: '', url: ''},
    {imageSrc: 'f', projectName: '', url: ''},
    {imageSrc: 'g', projectName: '', url: ''},
    {imageSrc: 'h', projectName: '', url: ''},
    {imageSrc: 'i', projectName: '', url: ''},
    {imageSrc: 'j', projectName: '', url: ''},
    {imageSrc: 'k', projectName: '', url: ''},
    {imageSrc: 'l', projectName: '', url: ''},
    {imageSrc: 'm', projectName: '', url: ''},
    {imageSrc: 'n', projectName: '', url: ''},
    {imageSrc: 'o', projectName: '', url: ''},
    {imageSrc: 'p', projectName: '', url: ''},
    {imageSrc: 'q', projectName: '', url: ''},
    {imageSrc: 'r', projectName: '', url: ''},
    {imageSrc: 's', projectName: '', url: ''},
    {imageSrc: 't', projectName: '', url: ''},
    {imageSrc: 'u', projectName: '', url: ''},
    {imageSrc: 'w', projectName: '', url: ''},
    {imageSrc: 'x', projectName: '', url: ''},
    {imageSrc: 'y', projectName: '', url: ''},
    {imageSrc: 'z', projectName: '', url: ''},
]


function Works() {
    return (
        <section>
            <div className="imageBox">
                {imageList.map(value => {
                    return (
                        <div className='image'>
                            {value['imageSrc']}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Works
