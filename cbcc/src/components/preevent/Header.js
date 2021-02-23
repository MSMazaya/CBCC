import React from 'react'
import {motion} from 'framer-motion'


const Header = () => {

    const scroll =  (amountToScroll)=>{
        //amount to scroll is negative to scroll up
        window.scrollTo(0 , amountToScroll)
    }
    
    return (
        <motion.div 
        initial={{
            opacity:0,
            y:20
        }}
        animate={{
            opacity:1,
            y:0
        }}
        transition={{
            delay:1,
            duration:1    
        }}
        className="pre-event-header">
            <div className="header-part-1">
                <h1 >Pre-event</h1>
                <motion.a
                whileHover={{scale:1.1}}
                onClick={()=>scroll(1230)}>Timeline</motion.a>
            </div>
            <div className="description">
                <p>CBCC Talks will be delivered by 3 speakers in one frame. They will share their stories and followed by tips and tricks on how to attain excellent academic and non-academic achievements to the audience. The speakers’ high influencing skills are expected to augment the promotion and attractiveness of the CBCC 2021 among Indonesian undergraduate students across the globe. While this talk show is promoting CBCC’s main event, it also gives benefits to the audience. These benefits are expected to make the audience to become more eager in participating in the main event.</p>
            </div>>
        </motion.div>
    )
}

export default Header
