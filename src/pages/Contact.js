import React from "react";
import '../css/Contact.css';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
    return (

        <div>
            <div className="title">
                <span>CONTACT</span>
            </div>
            <div className="contact-container">
                <div className="pt-20">
                    <TextField id="standard-basic" label="이메일" fullWidth={true}/>
                </div>

                <div className='contact-phone'>
                    <div className="pt-20">
                        <TextField id="standard-basic" label="전화번호" fullWidth={true}/>
                    </div>

                    <div className="pt-20">
                        <TextField id="standard-basic" label="기업번호" fullWidth={true}/>
                    </div>
                </div>

                <div className="pt-20">
                    <TextField id="standard-basic" label="이름" fullWidth={true}/>
                </div>


                <div className="pt-20">
                    <TextField
                        id="outlined-multiline-static"
                        label="내용"
                        multiline
                        rows={10}
                        variant="outlined"
                        fullWidth={true}
                    />
                </div>


                <div className="pt-20">
                    <TextField id="standard-basic" label="레퍼런스 영상 및 링크" fullWidth={true}/>
                </div>

            </div>
        </div>
    );
};
export default Contact