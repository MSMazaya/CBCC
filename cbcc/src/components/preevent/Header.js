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
            <div className="elips3 bg-decoration subheader-dekorasi2" style={{position: "absolute",
                    left: "-120px",
                    top: "400px"}}></div>
             <div className="elips2 bg-decoration subheader-dekorasi2" style={{
                    position:"relative",
                    left: "1180px",
                    top: "-70px"}}></div>
            <img src="element.png" alt="logo" style={{position: "absolute",
                    width: "300px",
                    height: "300px",
                    left: "0px",
                    top: "300px"}}/>
            <div className="header-part-1">
                <h1>Pre-event</h1>
                <motion.a
                whileHover={{scale:1.1}}
                onClick={()=>scroll(705)}>Timeline</motion.a>
            </div>
            <div className="description">
                <p>Pre-event sebagai acara pembuka dari Collegacy Business Case Competition (CBCC) 2021, Panitia CBCC mempersembahkan rangkaian acara Pre Event yang menarik dengan menghadirkan generasi muda inspiratif untuk berbagi wawasan seputar lika-liku dunia bisnis, perkembangan teknologi, dan topik menarik lainnya kepada mahasiswa Indonesia dimanapun berada.</p>
            </div>
        </motion.div>
    )
}

export default Header
