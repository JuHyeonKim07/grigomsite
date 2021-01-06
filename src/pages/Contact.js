import React, {useEffect, useState, useReducer} from "react";
import '../css/Contact.css';
import axios from "axios";
import browserHistory from "react-router-dom";
import {Button} from "@material-ui/core";

function reducer(state, {name, value}) {
    return {
        ...state,
        [name]: value,
    }
}

function Contact() {
    const initialState = {
        company: '',
        email: '',
        phone: '',
        number: '',
        name: '',
        message: '',
    }

    // onChange
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChange = (event) => {
        const {name, value} = event.target
        dispatch({name: name, value})
    }

    function handleFormSubmit(event) {
        console.log('Click')

        const email_Input = document.getElementById('email')
        const name_Input = document.getElementById('name')
        const phone_Input = document.getElementById('phone')

        if (!email_Input.checkValidity()) {
        } else if (!name_Input.checkValidity()) {
        } else if (!phone_Input.checkValidity()) {
        } else {
            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: {'content-type': 'application/json'},
                data: state
            }).then(res => {
                if(res.status === 200){
                    alert('메일을 전송하였습니다. 홈으로 이동합니다.')
                    window.location.pathname = '/'
                }else{
                    alert("메일전송에 실패하였습니다.")
                }
            }).catch(error => console.log(error));
            event.preventDefault()
        }
    };

    const {company, number, email, name, phone, message} = state
    const API_PATH = 'http://grigompictures.com/index.php'

    return (
        <div>
            <div className="title">
                <span>CONTACT</span>
            </div>

            <div className="Contact">
                <form>
                    <div>
                        <label>회사명</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your Name"
                            value={company}
                            onChange={onChange}
                        />

                        <label>회사번호</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            placeholder="Company Number"
                            value={number}
                            onChange={onChange}
                        />

                        <label>이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChange}
                            required
                        />

                        <label>담당자 이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={onChange}
                            required
                        />

                        <label>담당자 전화번호</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={onChange}
                            required
                        />

                        <label>내용</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write something.."
                            value={message}
                            onChange={onChange}
                            required
                        />
                        <Button variant="contained" color="default" onClick={e => handleFormSubmit(e)} >SUBMIT</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact