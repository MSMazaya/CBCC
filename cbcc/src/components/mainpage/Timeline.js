import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const tl_content_pre = [
    {date:"5 Februari", place:"Live IG I",title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"20 Februari 2021", place:"Live IG II",title:"“Break Your Limit”"},
    {date:"3 April 2021", place:"Instagram TakeOver",title:"““How to Build Personal Branding in the Digital Era”"},
    {date:"17 April 2021", place:"CBCC ClubHouse I",title:"“Outstanding Students 101: How to Become the Next Outstanding Student”"},
    {date:"5 Februari", place:"Live IG I",title:"“Introduction of Collegacy Bandung and CBCC“"},
]

const tl_content_bisnis = [
    {date:"5 Februari", title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"5 Februari", title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"5 Februari", title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"5 Februari", title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"5 Februari", title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"5 Februari", title:"“Introduction of Collegacy Bandung and CBCC“"},
    {date:"5 Februari", title:"“Introduction of Collegacy Bandung and CBCC“"},
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
            <div className="gap"></div>
            <div className='tl-wrapper'>
                <AnimatePresence>
                <div className="line"></div>
                {timelineTypes ? 
                <motion.div 
                intial={{y:0,opacity:1}}
                exit={{y:10,opacity:0}}
                className="timeline-container"> 
                {tl_content_pre.map(
                    (x,index)=>{
                    return ( 
                        index%2 === 0 
                        ? 
                        <div className="tl-items">
                            <div className="circle tl"></div>
                            <h2 className="tl-date">{x.date}</h2>
                            <h2>{x.place}</h2>
                            <span>{x.title}</span>
                        </div> 
                        :
                        <div className="tl-items-genap">
                            <div className="circle tl-genap"></div>
                            <h2 className="tl-date">{x.date}</h2>
                            <h2>{x.place}</h2>
                            <span>{x.title}</span>
                        </div> 
                        )
                    }
                )
                }{/* <div className="circle tl">
                    <div className="text">
                    <a className="tgl">5 Februari 2021</a>
                    <a className="live">Live IG I</a>
                    <a className="title">“Introduction of Collegacy Bandung and CBCC”</a>
                    </div>
                </div>
                <div className="circle tl">
                <div className="text">
                    <a className="tgl" style={{top: "-50px"}}>20 Februari 2021</a>
                    <a className="live" style={{top: "-85px"}}>Live IG II</a>
                    <a className="title" style={{top: "-100px"}}>“Break Your Limit ”</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                    <a className="tgl2">3 April 2021</a>
                    <a className="live2" style={{left: "-100px"}}>Instagram TakeOver</a>
                    <a className="title2" style={{left: "-145px", textAlign:"center"}}>“How to Build Personal Branding in the Digital Era”</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                    <a className="tgl2" style={{top: "-50px"}}>17 April 2021</a>
                    <a className="live2" style={{top: "-85px", left: "-80px"}}>CBCC ClubHouse I</a>
                    <a className="title2" style={{top: "-130px",left:"-160px",width:"350px", textAlign:"center"}}>“Outstanding Students 101: How to Become the Next Outstanding Student”</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                    <a className="tgl2" style={{left: "-50px"}}>2 Mei 2021</a>
                    <a className="live2" style={{left: "-70px"}}>CBCC ClubHouse II</a>
                    <a className="title2" style={{left: "0px"}}>TBA</a>
                </div>
                </div> */}
            </motion.div>
            :
            <motion.div
            exit={{y:10,opacity:0}}
            className="timeline-container">
                {tl_content_bisnis.map(
                    (x,index)=>{
                    return ( 
                        index%2 === 0 
                        ? 
                        <div className="tl-items">
                            <div className="circle tl"></div>
                            <h4>{x.title}</h4>
                            <span>{x.date}</span>
                        </div> 
                        :
                        <div className="tl-items-genap">
                            <div className="circle tl-genap"></div>
                            <h4>{x.title}</h4>
                            <span>{x.date}</span>
                        </div> 
                        )
                    }
                )
                }
                {/* <div className="circle tl">
                <div className="text">
                <a className="tgl3" style={{left:"-70px", width:"190px",textAlign:"center"}}>25 April-15 Mei 2021</a>
                <a className="title3" style={{top:"100px", left:"-60px"}}>Open Registration </a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                <a className="tgl4" style={{left:"-70px"}}>19-31 Mei 2021</a>
                <a className="title4" style={{left:"-70px",width:"200px",textAlign:"center",top:"-100px"}}>Individual Preliminary Challenge</a>
                </div>
                </div>                
                <div className="circle tl">
                <div className="text">
                <a className="tgl3" style={{left:"-70px"}}>22 Mei 2021</a>
                <a className="title3" style={{left:"-80px", width:"190px",textAlign:"center"}}>Workshop “How to Design Your Way of Thinking”</a>
                </div>
                </div>                
                <div className="circle tl">
                <div className="text">
                <a className="tgl5" style={{left:"-70px"}}>11 Juni 2021</a>
                <a className="title5" style={{left:"-140px",textAlign:"center",top:"-85px",lineHeight:"18px"}}>Top 60 Semifinalist Announcement</a>
                </div>
                </div>                
                <div className="circle tl">
                <div className="text">
                <a className="tgl3" style={{left:"-70px"}}>12 Juni 2021</a>
                <a className="title7"style={{left:"-100px",top:"75px"}}>Technical Meeting & Workshop</a>
                </div>
                </div>               
                <div className="circle tl">
                <div className="text">
                <a className="tgl6" style={{left:"-70px",width:"300px"}}>13-20 Juni 2021</a>
                <a className="title6" style={{top:"-80px"}}>CBCC Collaboration Challenge</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                <a className="tgl7" style={{left:"-65px"}}>19 Juni 2021</a>
                <a className="title7" style={{left:"-100px",top:"75px"}}>Semifinal pitch deck presentation</a>
                </div>
                </div>
                <div className="circle tl">
                <div className="text">
                <a className="tgl6" style={{left:"-55px"}}>20 Juni 2021</a>
                <a className="title6" style={{left:"-100px",top:"-80px"}}>Final pitch deck presentation & Awarding night</a>
                </div>
                </div> */}
            </motion.div>
            }
                </AnimatePresence>
                
                
            </div>
        </div>
    )
}


export default Timeline

