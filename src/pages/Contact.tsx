import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import '../css/Contact.css';

type inputTypes = {
    company: string;
    number: string;
    email: string;
    name: string;
    phone: string;
}

type textAreaType = {
    message: string
}


function Contact() {
    const [textarea, setTextarea] = useState<textAreaType>({
        message: ''
    });
    const [inputs, setInputs] = useState<inputTypes>({
        company: '',
        number: '',
        email: '',
        name: '',
        phone: '',
    })

    const { company, number, email, name, phone } = inputs
    const { message } = textarea


    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setTextarea({
            ...textarea,
            [name]: value
        });
    };

    function handleFormSubmit(event: React.FormEvent) {
        // 언제나 HTMLInputElement 가 반환된다는 것을 알려줌. (타입 단언)
        const email_Input = (document.getElementById('email') as HTMLInputElement).value
        const name_Input = (document.getElementById('name') as HTMLInputElement).value
        const phone_Input = (document.getElementById('phone') as HTMLInputElement).value

        if (email_Input.length === 0) {
            alert('이메일을 입력해주세요.')
        } else if (name_Input.length === 0) {
            alert('담당자 이름을 입력해주세요.')
        } else if (phone_Input.length === 0) {
            alert('담당자 전화번호를 입력해주세요.')
        } else {
            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: inputs
            }).then(res => {
                if (res.status === 200) {
                    alert('메일을 전송하였습니다. 홈으로 이동합니다.')
                    window.location.pathname = '/'
                } else {
                    alert("메일전송에 실패하였습니다.")
                }
            }).catch(error => console.log(error));
            event.preventDefault()
        }
    };

    const API_PATH: string = 'http://grigompictures.com/index.php'

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
                            onChange={onChangeInput}
                        />

                        <label>회사번호</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            placeholder="Company Number"
                            value={number}
                            onChange={onChangeInput}
                        />

                        <label>이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChangeInput}
                            required
                        />

                        <label>담당자 이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={onChangeInput}
                            required
                        />

                        <label>담당자 전화번호</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={onChangeInput}
                            required
                        />

                        <label>내용</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write something.."
                            value={message}
                            onChange={onChangeTextarea}
                            required
                        />
                        <Button variant="contained" color="default" onClick={handleFormSubmit} >전송</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact