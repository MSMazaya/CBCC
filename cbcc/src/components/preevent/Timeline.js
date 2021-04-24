import React, {useEffect, useState} from 'react'
import Subheader from './Subheader'

const timelineGroup = [
    {
        nama:"Rifka Novriani",
        posisi:"Project Officer at Collegacy Business Case Competition",
        judul:"“Introduction of Collegacy Bandung and CBCC”",
        deskripsi:"Bersama Project Officer dari acara ini, kami memperkenalkan Collegacy Bandung dan Collegacy Business Case Competition 2021 kepada publik, khususnya pengikut Instagram kami.",
        gambar:"Rifka.png"
    },
    {
        nama:"Tarreq Kemal", // Al idrusnya nyusul wkwk soalnya gak tau cara parse enter lewat string ke react component
        posisi:"Chief Executive Officer at Akademis.id",
        judul:"“Break Your Limit”",
        deskripsi:"Mengangkat mahasiswa sebagai pembicara, kami ingin memberikan wawasan kepada penonton terkait cara mengontrol dan keluar dari limit yang ada dalam mengejar apa yang diimpikan.",
        gambar:"Tareq.jpg"
    },
    {
        nama:"Nabila Ishma",
        posisi: "Founder metamorfosa_ind",
        judul:"“How to Build Personal Branding in the Digital Era”",
        deskripsi:"Personal branding adalah salah satu kunci kesuksesan seseorang. Menyadari akan pentingnya personal branding baik di dunia kampus maupun kerja, kami mempersembahkan Instagram TakeOver yang akan mengupas seputar personal branding dari pembicara yang inspiratif dan berpengalaman.",
        gambar:"Nabila.png"
    },
    {
        nama:"To Be Announced",
        posisi: "Coming soon",
        judul:"CBCC ClubHouse I",
        deskripsi:"Coming soon.",
        gambar:"cs.png"
    },
    {
        nama:"To Be Announced",
        posisi: "Coming soon",
        judul:"CBCC ClubHouse II",
        deskripsi:"Coming soon.",
        gambar:"cs.png"
    }
]
const Timeline = () => {
    const [group, setGroup] = useState(0)
    const [timelineTypes, setTimelineTypes] = useState(true)
    const [check, setCheck] = useState([])
    useEffect(() => {
        let temp = []
        for(let i=0;i<timelineGroup.length+1;i++){
            temp.push((group === i ? true : false))
        }
        setCheck(temp)
        console.log(check)
    }, [group])
    return (
        <div className="preevent-timeline flex-col">
            <h1 className="sub-title" style={{marginBottom:"80px"}}>Timeline</h1>
            <div className='flex-row pointer-wrapper'>
                <div  className="pointer">
                    <div className="temlen">
                    <a className={`tanggal ${check[0] ? "active" : ""}`} onClick={()=>setGroup(0)} style={{left:"40px"}} >5 Februari 2021</a>
                    <a className="lipe">Live IG 1</a>
                    <a className="jdl">“Introduction of Collegacy Bandung and CBCC”</a>
                    </div>
                </div>
                <div className="pointer">
                <div className="temlen">
                    <a className={`tanggal ${check[1] ? "active" : ""}`} onClick={()=>setGroup(1)} style={{left:"30px"}}>20 Februari 2021</a>
                    <a className="lipe2"style={{left:"65px"}}>Live IG 2</a>
                    <a className="jdl2"style={{left:"-40px"}}>“Break Your Limit”</a>
                    </div>
                </div>
                <div className="pointer">
                <div className="temlen">
                    <a className={`tanggal ${check[2] ? "active" : ""}`} onClick={()=>setGroup(2)} style={{left:"50px"}}>3 April 2021</a>
                    <a className="lipe"style={{lineHeight:"30px",top:"50px",width:"300px",left:"0px"}}>Instagram TakeOver</a>
                    <a className="jdl">How to Build Personal Branding in the Digital Era</a>
                    </div>
                </div>
                <div className="pointer">
                <div className="temlen">
                    <a className={`tanggal ${check[3] ? "active" : ""}`} onClick={()=>setGroup(3)} style={{left:"45px"}}>17 April 2021</a>
                    <a className="lipe2"style={{width:"300px",left:"55px"}}>ClubHouse I</a>
                    <a className="jdl2"style={{top:"-70px",width:"400px",left:"-90px",fontSize:"18px",lineHeight:"15px"}}>Outstanding Students 101: How to Become the Next Outstanding Student</a>
                    </div>
                </div>
                <div className="pointer">
                <div className="temlen">
                    <a className={`tanggal ${check[4] ? "active" : ""}`} onClick={()=>setGroup(4)} style={{left:"50px"}}>16 Mei 2021</a>
                    <a className="lipe"style={{width:"300px",left:"45px"}}>ClubHouse II</a>
                    <a className="jdl"style={{width:"300px",left:"-45px"}}>To Be Announced</a>
                    </div>
                </div>
            </div>
            <Subheader nama={timelineGroup[group].nama} posisi={timelineGroup[group].posisi} judul={timelineGroup[group].judul} deskripsi={timelineGroup[group].deskripsi} gambar={timelineGroup[group].gambar} />
        </div>
        
    )
}




export default Timeline

