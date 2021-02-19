import React from 'react'

const Footer = () => {
    return (
        <footer>
            <img src="logo-footer.png" alt="footer"/>
            <p>@Information System and Technology CBCC</p>
            <div className="icons">
                <img className="line" src="line.png" alt="line" href="https://page.line.me/725fevya" target="_blank"/>
                <img className="instagram" src="instagram.png" alt="instagram" href="https://www.instagram.com/collegacy.bcc/" target="_blank"/>
                <img className="linkedin" src="link.png" alt="linkedin" href="https://www.linkedin.com/company/collegacy-business-case-competition" target="_blank"/>
                <img className="email" src="email.png" alt="email" href="mailto:participants.collegacybcc@gmail.com" target="_blank"/>
                <div className="adder"></div>
            </div>
            <div className="sosmed">
                <a className="linea" href="https://page.line.me/725fevya" target="_blank">@725fevya</a>
                <a className="ig" href="https://www.instagram.com/collegacy.bcc/" target="_blank">collegacy.bcc</a>
                <a className="linked" href="https://www.linkedin.com/company/collegacy-business-case-competition" target="_blank">Collegacy Business Case Competition</a>
                <a className="emaila" href="mailto:participants.collegacybcc@gmail.com" target="_blank">participants.collegacybcc@gmail.com</a>
            </div>
            
        </footer>
    )
}

export default Footer
