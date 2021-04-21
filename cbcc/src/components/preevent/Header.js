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
            <div className="elips3 bg-decoration subheader-dekorasi2" style={{
                    left: "-120px",
                    top: "400px",
                    zIndex:"0"}}></div>
             <div className="elips2 bg-decoration subheader-dekorasi2" style={{
                    position:"relative",
                    left: "1180px",
                    top: "-70px",
                    zIndex:"0"}}></div>
            <img src="element.png" alt="logo" style={{position: "absolute",
                    width: "300px",
                    height: "300px",
                    left: "0px",
                    top: "300px",
                    zIndex:"0"}}/>
            <div className="header-part-1">
                <h1 style={{zIndex: "950"}}>Pre-event</h1>
                <motion.a
                whileHover={{scale:1.1}}
                onClick={()=>scroll(705)}>Timeline</motion.a>
            </div>
            <div className="description" style={{zIndex: "950"}}>
                <p>Pre-event sebagai acara pembuka dari Collegacy Business Case Competition 2021, mempersembahkan rangkaian acara yang menarik dengan menghadirkan generasi muda inspiratif untuk berbagi wawasan seputar lika-liku dunia bisnis, perkembangan teknologi, dan topik menarik lainnya kepada mahasiswa Indonesia di mana pun berada.</p>
            </div>
        </motion.div>
    )
}

export default Header
