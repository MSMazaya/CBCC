import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'

const Events = () => {
    const [Events, setEvents] = useState([1,2,3])
    return (
        <div className="events">
            <h1>Events</h1>
            <motion.div  
            initial={{
                y:20,
                opacity:0
            }}
            animate={{
                y:0,
                opacity:1
            }}
            transtion={{
                duration:2
            }}
            className="grid-container">
                {Events.map((x) => {
                    return <div
                    className="card-event">{x}</div>
                })}
            </motion.div>
        </div>
    )
}

export default Events
