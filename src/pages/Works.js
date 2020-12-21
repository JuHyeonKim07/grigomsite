import React from "react";


const imageList = [
    {imageName: "a"},
    {imageName: "b"},
    {imageName: "c"},
    {imageName: "d"},
    {imageName: "e"},
    {imageName: "f"},
    {imageName: "g"},
    {imageName: "h"},
    {imageName: "i"},
    {imageName: "j"},
    {imageName: "k"},
    {imageName: "l"},
    {imageName: "m"},
    {imageName: "n"},
    {imageName: "o"},
    {imageName: "p"},
    {imageName: "q"},
    {imageName: "r"},
    {imageName: "s"},
    {imageName: "t"},
    {imageName: "u"},
    {imageName: "w"},
    {imageName: "x"},
    {imageName: "y"},
    {imageName: "z"},
]


function Works() {
    return (
        <body>
        <section>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {imageList.map(value => {
                    return (
                        <div style={{flexBasis: "33.3%", height: 400}}>
                            {value['imageName']}
                        </div>
                    )
                })}
            </div>
        </section>
        </body>
    )
}

export default Works
