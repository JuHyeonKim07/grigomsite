import React, {useEffect, useState, useReducer} from "react";
import '../css/Contact.css';
import * as mailPoster from "nodemailer";
import nodeMailer from "nodemailer";

// 메일 보내는 사람 설정
nodeMailer.createTestAccount({
    service: 'worksmobile',
    host: "smtp.worksmobile.com",
    port: "465",
    secure: "true",
    auth: {
        user: {
            user: 'director@grigompictures.com',
            pass: 'rlaehdgur9107!'
        }
    }
})

// 메일 받은 사람 설정
const mailOpt = (user_data) => {
    const mailOptions = {
        from: '보낼사람',
        to: 'director@grigompictures.com',
        subject: '메일제목 입력',
        text: '내용 입력'
    };
    return mailOptions;
}

// 메일 전송
const sendMail = (mailOption) => {
    mailPoster.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log('에러 ' + error);
        } else {
            console.log('전송 완료 ' + info.response);
        }
    });
}

function reducer(state, {name, value}) {
    return {
        ...state,
        [name]: value,
    }
}

function Contact() {
    const initialState = {
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
    const {email, phone, number, name, message} = state

    return (
        <div>
            <div className="title">
                <span>CONTACT</span>
            </div>

            <div className="Contact">
                <form action="/action_page.php">
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChange}
                            required
                        />

                        <label>Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Your last name.."
                            value={phone}
                            onChange={onChange}
                            required
                        />

                        <label>Company Number</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            placeholder="Your last name.."
                            value={number}
                            onChange={onChange}
                            required
                        />

                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your last name.."
                            value={name}
                            onChange={onChange}
                            required
                        />

                        <label>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write something.."
                            value={message}
                            onChange={onChange}
                            required
                        />
                        <input type="submit" value="submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact