import React from 'react'
import {motion, useAnimation, AnimatePresence} from 'framer-motion'
import {useState, useRef} from 'react'

const dropdownVariants = {
    first: {rotate: 0},
    after: {rotate: 180},
}
const Question = ({question,answer}) => {
    const [dropdown, setDropdown] = useState(false)
    const controlinitial = useAnimation();
    const controlanimate = useAnimation();
    const ref = useRef(null)
    return (
        <div>
            <div className={dropdown ? "question-wrapper active" : "question-wrapper"}
            >
                <div className="question">  
                    <h1>{question}</h1>
                    <motion.img
                    whileHover={{cursor:'pointer'}}
                    onClick={()=>{
                        setDropdown(!dropdown);
                        if (dropdown){
                            controlanimate.start('first')
                            controlinitial.start('after')
                        }
                        else{
                            controlanimate.start('after')
                            controlinitial.start('first')
                        }
                    }}
                    initial={controlinitial}
                    animate={controlanimate}
                    variants={dropdownVariants}
                    transition={{duration:.25}}
                    src="dropdown.png" alt="dropdown"/>
                </div>
                <div className="answer">
                    <p>{answer}</p>
                </div>
                    {/* <AnimatePresence>
                    {dropdown && 
                            <motion.div
                            initial={{y:-50,opacity:0}}
                            animate={{y:-10,opacity:1}}
                            exit={{y:-50,opacity:0}}
                            transition={{duration:.5}}
                            className="answer">
                                <p>{answer}</p>
                            </motion.div>
                    }
                    </AnimatePresence> */}
            </div>
        </div>
    )
}

export default Question
