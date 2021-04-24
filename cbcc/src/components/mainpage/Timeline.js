import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const tl_content_pre = [
    {date:"5 Februari 2021", place:"Live IG I",title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"20 Februari 2021", place:"Live IG II",title:"Live IG Sharing about “Break Your Limit”"},
    {date:"3 April 2021", place:"Instagram TakeOver",title:"““How to Build Personal Branding in the Digital Era”"},
    {date:"17 April 2021", place:"CBCC ClubHouse I",title:"“How to Become the Next Outstanding Student”"},
    {date:"16 Mei 2021", place:"CBCC ClubHouse II",title:"“TBA“"},
]

const tl_content_bisnis = [
    {date:"25 April-15 Mei 2021", title:"Open Registration"},
    {date:"19-31 Mei 2021", title:"Individual Preliminary Challenge"},
    {date:"22 Mei 2021", title:"Workshop “How to Design Your Way of Thinking”"},
    {date:"11 Juni 2021", title:"Top 60 Semifinalist Announcement"},
    {date:"12 Juni 2021", title:"Technical Meeting & Workshop"},
    {date:"13-20 Juni 2021", title:"CBCC Collaboration Challenge"},
    {date:"19 Juni 2021", title:"Semifinal pitch deck presentation"},
    {date:"20 Juni 2021", title:"Final pitch deck presentation & Awarding night"},
]

const Timeline = () => {
    const [timelineTypes, setTimelineTypes] = useState(true)
    return (
        <div className="timeline">
            <h1 className="sub-title">Timeline</h1>
            <div className="judul">
                <a whileHover={()=>{}} className={timelineTypes ? "picked" : ""} onClick={()=>setTimelineTypes(true)}>Pre-Event</a>
                <a className={timelineTypes ? "" : "picked"} onClick={()=>setTimelineTypes(false)}>Business Case Competition</a>
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
                            <div className="line" style={{backgroundColor:(index === tl_content_pre.length-1 && "transparent"), height:"142%"}}></div>
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
                            <div className="line" style={{backgroundColor:(index === tl_content_bisnis.length-1 && "transparent"), height:"172%"}}></div>
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
        </div>
    )
}


export default Timeline

