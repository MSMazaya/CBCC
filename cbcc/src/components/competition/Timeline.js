import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const tl_content_pre = [
    {date:"25-30 April 2021", title:"Open Early Bird Registration"},
    {date:"1-15 Mei 2021", title:"Open Normal Registration"},
    {date:"19 Mei 2021", title:"Case Distribution"},
    {date:"22 Mei", title:"”Workshop “How to Design Your Way of Thinking”"},
    {date:"19-31 Mei 2021", title:"Essay Submission"},
    {date:"11 Juni 2021", title:"“Top 60 Semifinalist Announcement“"},
]

const tl_content_bisnis = [
    {date:"12 Juni 2021", title:"Technical Meeting Collaboration Challenge"},
    {date:"12 Juni 2021", title:"Workshop “How to Make a Proper Pitch Deck”"},
    {date:"13-18 Juni 2021", title:"Pitchdeck Execution"},
    {date:"18 Juni 2021", title:"Pitchdeck Submission"},
    {date:"19 Juni 2021", title:"Pitching Day and Top 5 Anouncement"},
    {date:"20 Juni 2021", title:"Final Presentation & Awarding Night"},
]

const Timeline = () => {
    const [timelineTypes, setTimelineTypes] = useState(true)
    return (
        <div className="timeline">
            <h1 className="sub-title">Timeline</h1>
            <div className="judul">
                <a whileHover={()=>{}} className={timelineTypes ? "picked" : ""} onClick={()=>setTimelineTypes(true)}>Individual Preliminary</a>
                <a className={timelineTypes ? "" : "picked"} onClick={()=>setTimelineTypes(false)}>Collaboration Challenge</a>
            </div>
            <div className="tl-gap"></div>
            <div className='tl-wrapper'>
                <AnimatePresence>
                {/* <div className="line" style={{height:(timelineTypes ? "119vh" : "130vh")}}></div> */}
                {timelineTypes ? 
                <motion.div 
                intial={{y:0,opacity:1}}
                exit={{y:10,opacity:0}}
                className="timeline-container"> 
                {tl_content_pre.map(
                    (x,index)=>{
                    return <div className="tl-items">
                            <div className="circle tl"></div>
                            <div className="line" style={{backgroundColor:(index === tl_content_pre.length-1 && "transparent"), height:"200%"}}></div>
                            <div className="inside-tl-items">
                                <h3 className="tl-date">{x.date}</h3>
                                <h3>{x.place}</h3>
                                <span>{x.title}</span>
                            </div>
                        </div>
                    }
                )
                }
            </motion.div>
            :
            <motion.div
            exit={{y:10,opacity:0}}
            className="timeline-container">
                {tl_content_bisnis.map(
                    (x,index)=>{
                    return (
                        <div className="tl-items">
                            <div className="circle tl"></div>
                            <div className="line" style={{backgroundColor:(index === tl_content_bisnis.length-1 && "transparent"), height:"210%"}}></div>
                            <div className="inside-tl-items">
                                <h4>{x.title}</h4>
                                <span>{x.date}</span>
                            </div>
                        </div> 
                        )
                    }
                )
                }
            </motion.div>
            }
                </AnimatePresence>   
            </div>
            <div className="flex-row"
                style={{
                    gap:"30px",
                    marginTop:"100px"
                }}
            > 
            </div>
        </div>
        
    )
}


export default Timeline

/*<motion.div
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
                </div></motion.div>*/