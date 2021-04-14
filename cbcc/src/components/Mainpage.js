import React, {useState} from 'react'
import Header from "./mainpage/Header"
import Events from "./mainpage/Events"
import Timeline from "./mainpage/Timeline"
import Subheader from './mainpage/Subheader'
import Faq from "./mainpage/Faq"
import Sponsor from "./mainpage/Sponsor"
import Mediapartner from './mainpage/Mediapartner'
import {motion} from 'framer-motion'


const Mainpage = () => {
    const [respond, setRespond] = useState(true)
    window.addEventListener('resize',()=>{
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        if (w<1000){
            setRespond(false)
        } else{
            setRespond(true)
        }
    });
    return (
        <motion.div
        exit={{opacity:0}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        >
            <Header/>
            <Subheader/>
            {respond && <Events/>}
            <Timeline/>
            <Faq/>
            <Sponsor/>
            <Mediapartner/>
        </motion.div>   
    )
}

export default Mainpage
