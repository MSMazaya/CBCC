import React from 'react'
import {motion} from 'framer-motion'
const Header = () => {
    const scroll =  (amountToScroll)=>{
        //amount to scroll is negative to scroll up
        window.scrollTo(0 , amountToScroll)
    }
    return (
        <header>
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
            className="hero">
                <div className="hero-items">
                    <img src="hero.png" alt="hero"/>
                    <div>
                        <div className="kolab"><a>Collaboration With</a></div>
                        <ul className="headline-items logo">
                            <img className="sejutacita" src="sejutacita.png" alt="sejutacita"/>
                            <img className='sfl' src="sfl.png" alt="sejutacita"/>
                        </ul>
                    </div>
                </div>
                <div className="headline">
                    <ul className="headline-items">
                        <motion.li
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1,
                                }
                            }}
                        ><a className="tentang" onClick={()=>scroll(520)}>About Us</a></motion.li>
                        <motion.li
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1
                                }
                            }}
                        ><a className="daftar" href="">Register</a></motion.li>
                </ul>
                </div>
            </motion.div>
            <div className="cover">
                <motion.div
                initial={{x:100}}
                animate={{x:0}}
                transition={{
                    type: "spring",
                    delay:2,
                    damping:5,
                }}
                className="elips1 bg-decoration dekorasi1"></motion.div>
            </div>
            <div className="cover">
                <motion.div
                initial={{x:-100}}
                animate={{x:0}}
                transition={{
                    type: "spring",
                    delay:2,
                    damping:5,
                }}
                className="poligon1 bg-decoration dekorasi2"></motion.div>
            </div>
        </header>
        
    )
}



export default Header
