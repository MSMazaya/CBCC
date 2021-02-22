import React from 'react'
import Question from './faq/Question'

const listFaq = [
    {question:"abc",answer:"Gatau"},
    {question:"abc",answer:"Gatau"},
    {question:"abc",answer:"Gatau"},
    {question:"abc",answer:"Gatau"}
]

const Faq = () => {
    return (
        <div className="faq"
            style={{
                marginBottom:"300px"
            }}
        >
            <h1 className="sub-title">FAQ</h1>
            {listFaq.map((x)=>{
                return <div className="wrapper">
                    <Question question={x.question} answer={x.answer}/>
                </div>
            })}
        </div>
    )
}

export default Faq
