import React, {useState} from 'react'
import Subheader from './Subheader'

const timelineGroup = [
    {
        nama:"Rifka Novriani",
        posisi:"Project Officer at Collegacy Business Case Competition",
        judul:"“Introduction of Collegacy Bandung and CBCC”",
        deskripsi:"Live IG 1 will introduce the Collegacy Bandung and the Collegacy Business Case Competition 2021, so that our followers get to know us and our events more. We want to get their trust and encourage them to register as participants later."
    },
    {
        nama:"Tarreq Kemal", // Al idrusnya nyusul wkwk soalnya gak tau cara parse enter lewat string ke react component
        posisi:"Chief Executive Officer at Akademis.id",
        judul:"“Break Your Limit”",
        deskripsi:" Live IG II will be presented by an undergraduate student as a speaker. He will share his story about his extraordinary accomplishments associated with breaking his own limit along the way. The purpose of Live Ig II is to motivate the audience, especially undergraduate students, to take part in the CBCC 2021."
    },
    {
        nama:"Secret Speaker",
        posisi: "Coming soon",
        judul:"“Outstanding Students 101”",
        deskripsi:"Coming soon"
    }
]
const Timeline = () => {
    const [group, setGroup] = useState(0)
    return (
        <div className="preevent-timeline flex-col">
            <h1 className="sub-title">Timeline</h1>
            <div className='flex-row pointer-wrapper'>
                <div onClick={()=>setGroup(0)} className="pointer"></div>
                <div onClick={()=>setGroup(1)} className="pointer"></div>
                <div onClick={()=>setGroup(2)} className="pointer"></div>
            </div>
            <Subheader nama={timelineGroup[group].nama} posisi={timelineGroup[group].posisi} judul={timelineGroup[group].judul} deskripsi={timelineGroup[group].deskripsi} />
        </div>
    )
}


export default Timeline

