import React from 'react'
import Question from './faq/Question'

const listFaq = [
    {question:"Berapa hasil 1+1",answer:"Gatau"},
    {question:"Berapa hasil 1+1",answer:"Gatau"},
    {question:"Berapa hasil 1+1",answer:"Gatau"},
    {question:"Berapa hasil 1+1",answer:"Gatau"}
]

const Faq = () => {
    

    return (
        <div className="faq">
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
