import React from 'react'
import Header from "./mainpage/Header"
import Events from "./mainpage/Events"
import Timeline from "./mainpage/Timeline"
import Subheader from './mainpage/Subheader'
import Footer from "./mainpage/Footer"
import Faq from "./mainpage/Faq"
import Sponsor from "./mainpage/Sponsor"
import Mediapartner from './mainpage/Mediapartner'

const Mainpage = ({ref}) => {
    return (
        <div>
            <Header/>
            <Subheader/>
            <Events/>
            <Timeline/>
            <Faq/>
            <Sponsor/>
            <Mediapartner/>
            <Footer/>
        </div>
    )
}

export default Mainpage
