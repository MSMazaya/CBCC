import React from 'react'
import {motion} from 'framer-motion'

const Header = () => {
    return (
        <div
        style={{backgroundImage: `url("competition-bg.png")`, backgroundSize: '100%'}}
        className="competition-header">
            <div className="title-button-wrapper flex-col">
                <h1>Business Case <br/> Competition</h1>
                <div className="flex-row btn-wrapper">
                <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1,
                                }
                            }}
                        >
                    <div className="btn"> 
                        <h2 style={{color: "white"}}>Guidelines</h2>
                    </div></motion.div>
                    <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1,
                                }
                            }}
                        >
                    <div className="btn">
                        <h2 style={{color: "white"}}>Register</h2>
                    </div></motion.div>
                </div>
            </div>
        </div>
    )
}

export default Header
