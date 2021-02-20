import React from 'react'
import {useState,useEffect} from 'react'

const link ={
    line:"https://page.line.me/725fevya",
    instagram:"https://www.instagram.com/collegacy.bcc/",
    linkedin:"https://www.linkedin.com/company/collegacy-business-case-competition",
    email:"mailto:participants.collegacybcc@gmail.com",
}

const Footer = () => {
    const [clicked, setClicked] = useState({});
    useEffect(() => {
        if (clicked['status']) {
        // do something meaningful, Promises, if/else, whatever, and then
        window.open(link[clicked['jenis']]);
        }
    },[clicked]);
    return (
        <footer>
            <img src="logo-footer.png" alt="footer"/>
            <p>@Information System and Technology CBCC</p>
            <div className="icons">
                <div className="wrap-sosmed">
                    <img onClick={()=>setClicked({jenis:"line",status:true})}  className="icon" src="line.png" alt="line" href="https://page.line.me/725fevya" target="_blank"/>
                    <a className="linea" href="https://page.line.me/725fevya" target="_blank">@725fevya</a>
                </div>
                <div className="wrap-sosmed">
                    <img onClick={()=>setClicked({jenis:"instagram",status:true})}  className="icon instagram" src="instagram.png" alt="instagram" href="https://www.instagram.com/collegacy.bcc/" target="_blank"/>
                    <a className="ig" href="https://www.instagram.com/collegacy.bcc/" target="_blank">collegacy.bcc</a>
                </div>
                <div className="wrap-sosmed">
                    <img onClick={()=>setClicked({jenis:"linkedin",status:true})}  className="icon linkedin" src="link.png" alt="linkedin" href="https://www.linkedin.com/company/collegacy-business-case-competition" target="_blank"/>
                    <a className="linked" href="https://www.linkedin.com/company/collegacy-business-case-competition" target="_blank">Collegacy&nbsp;Business&nbsp;Case&nbsp;Competition</a>
                </div>
                <div className="wrap-sosmed">
                    <img onClick={()=>setClicked({jenis:"email",status:true})} className="icon email" src="email.png" alt="email" href="mailto:participants.collegacybcc@gmail.com" target="_blank"/>
                    <a className="emaila" href="mailto:participants.collegacybcc@gmail.com" target="_blank">participants.collegacybcc@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
