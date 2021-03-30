import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Timeline = () => {
    const [timelineTypes, setTimelineTypes] = useState(true)
    return (
        <div className="preevent-timeline flex-col">
            <h1 className="sub-title">Timeline</h1>
            <div className="judul">
                <a whileHover={()=>{}} className={timelineTypes ? "picked" : ""} onClick={()=>setTimelineTypes(true)}>Individual Preliminary</a>
                <a className={timelineTypes ? "" : "picked"} onClick={()=>setTimelineTypes(false)}>Collaboration Challenge</a>
            </div>
            {timelineTypes ? 
                    <div className='flex-row pointer-wrapper'>            
                        <div className="pointer" style={{width:"150px"}}>
                        <div className="temlen">
                    <a className="tanggal2" style={{
                        left:"28px",fontSize:"15px",top:"2.5px"
                    }}>25-30 April 2021</a>
                    <a className="jdl3" style={{fontSize:"17px",top:"50px",left:"-70px"}}>Open Early Bird Registration</a>
                    </div>
                            </div>
                        <div className="pointer"style={{width:"150px"}}>
                        <div className="temlen">
                    <a className="tanggal2" style={{
                        left:"28px",fontSize:"17px",top:"2.5px"
                    }}>1-15 Mei 2021</a>
                    <a className="jdl4" style={{
                        top:"-35px",
                        left:"-70px",
                        fontSize:"17px",
                    }}>Open Normal
                    Registration</a>
                    </div>
                            </div>
                        <div className="pointer" style={{width:"150px"}}>
                        <div className="temlen">
                    <a className="tanggal2" style={{
                        left:"34px",fontSize:"17px",top:"2.5px"
                    }}>19 Mei 2021</a>
                    <a className="jdl3" style={{fontSize:"17px",top:"50px",left:"-70px"}}>Case Distribution</a>
                    </div>
                            </div>
                        <div className="pointer"style={{width:"150px"}}>
                        <div className="temlen">
                            <a className="tanggal2" style={{
                        left:"35px",fontSize:"17px",top:"2.5px"
                    }}>22 Mei 2021</a>
                            <a className="jdl4" style={{
                        top:"-38px",
                        left:"-70px",
                        fontSize:"17px",
                        lineHeight:"16px"
                    }}>Workshop “How to Design Your Way of Thinking”</a>
                            </div>
                        </div>
                        <div className="pointer"style={{width:"150px"}}>
                        <div className="temlen">
                            <a className="tanggal2" style={{
                        left:"26px",fontSize:"17px",top:"2.5px"
                    }}>19-31 Mei 2021</a>
                            <a className="jdl3" style={{
                        top:"60px",
                        left:"-70px",
                        fontSize:"17px",
                        lineHeight:"16px"
                    }}>Essay Submission</a>
                        </div>
                            </div>
                            <div className="pointer"style={{width:"150px"}}>
                        <div className="temlen">
                            <a className="tanggal2" style={{
                        left:"32px",fontSize:"17px",top:"2.5px"
                    }}>11 Juni 2021</a>
                            <a className="jdl3" style={{
                        top:"-30px",
                        left:"-70px",
                        fontSize:"17px",
                        lineHeight:"16px"
                    }}>Top 60 Semifinalist Announcement</a>
                        </div>
                            </div>

                    </div>

                    
                    
            :
            <div className='flex-row pointer-wrapper'>           
                      <div className="pointer" style={{width:"150px"}}>
                        <div className="temlen">
                    <a className="tanggal2" style={{
                        left:"34px",fontSize:"18px",top:"2.5px"
                    }}>12 Juni 2021</a>
                    <a className="jdl3" style={{fontSize:"17px",top:"56px",left:"-30px",width:"200px",lineHeight:"15px"}}>Workshop “How to Make a Proper Pitch Deck”</a>
                    <a className="jdl4" style={{
                        top:"-45px",
                        lineHeight:"15px",
                        left:"-30px",
                        fontSize:"17px", width:"200px"
                    }}>Technical Meeting
                    Collaboration
                    Challenge</a>
                    </div>
                            </div>
                        <div className="pointer" style={{width:"150px"}}>
                        <div className="temlen">
                    <a className="tanggal2" style={{
                        left:"28px",fontSize:"15px",top:"2.5px"
                    }}>13-18 Juni 2021</a>
                    <a className="jdl3" style={{fontSize:"17px",top:"50px",left:"-70px"}}>Pitchdeck
Execution</a>
                    </div>
                            </div>
                        <div className="pointer"style={{width:"150px"}}>
                        <div className="temlen">
                            <a className="tanggal2" style={{
                        left:"35px",fontSize:"17px",top:"2.5px"
                    }}>18 Juni 2021</a>
                            <a className="jdl4" style={{
                        top:"-30px",
                        left:"-70px",
                        fontSize:"17px",
                        lineHeight:"16px"
                    }}>Pitchdeck 
                    Submission</a>
                            </div>
                        </div>
                        <div className="pointer"style={{width:"150px"}}>
                        <div className="temlen">
                            <a className="tanggal2" style={{
                        left:"26px",fontSize:"17px",top:"2.5px"
                    }}>19 Juni 2021</a>
                            <a className="jdl3" style={{
                        ontSize:"17px",top:"55px",left:"-20px",width:"200px",lineHeight:"15px",fontSize:"17px"
                    }}>Pitching Day
                    and 
                    Top 5 Anouncement</a>
                        </div>
                            </div>
                            <div className="pointer"style={{width:"150px"}}>
                        <div className="temlen">
                            <a className="tanggal2" style={{
                        left:"32px",fontSize:"17px",top:"2.5px"
                    }}>20 Juni 2021</a>
                            <a className="jdl3" style={{
                       top:"-45px",
                       lineHeight:"15px",
                       left:"-30px",
                       fontSize:"17px", width:"200px"
                    }}>Final Presentation
                    & Awarding Night</a>
                        </div>
                            </div>
            </div>
            }
            
            <div className="flex-row"
                style={{
                    gap:"30px",
                    marginTop:"100px"
                }}
            >
                <motion.div
                            whileHover="hover"
                            variants={{
                                hover:{
                                    scale:1.1,
                                }
                            }}
                        >
                <div className="btn">
                    <h2 style={{
                            color: "white",
                            fontSize: "18px",
                    }}>Download <br/>Guidelines</h2>
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
                    <h2 style={{
                            color: "white"
                }}>Register</h2>
                </div></motion.div>
            </div>
        </div>
    )
}


export default Timeline

