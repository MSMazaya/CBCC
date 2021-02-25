import React from 'react'
import {motion} from 'framer-motion'

const Header = () => {
    return (
        <div
        style={{backgroundImage: `url("competition-bg.png")`, backgroundSize: '100%'}}
        className="competition-header">
            <img src="element.png" alt="logo" style={{position: "absolute",
                    width: "300px",
                    height: "300px",
                    left: "-10px",
                    top: "170px"}}/>
               <img src="element.png" alt="logo" style={{position: "absolute",
                    width: "200px",
                    height: "200px",
                    left: "-10px",
                    top: "360px"}}/>
                <img src="element.png" alt="logo" style={{position: "absolute",
                    rotate:"180deg",
                    width: "300px",
                    height: "300px",
                    left: "1050px",
                    top: "0px"}}/>
                <img src="element.png" alt="logo" style={{position: "absolute",
                    rotate:"180deg",
                    width: "200px",
                    height: "200px",
                    left: "1150px",
                    top: "170px"}}/>
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
