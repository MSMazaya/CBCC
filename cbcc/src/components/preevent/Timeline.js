import React, {useState} from 'react'
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
        nama:"Secret Speaker",
        posisi: "Coming soon",
        judul:"“How to Build Personal Branding in the Digital Era 1”",
        deskripsi:"Personal branding adalah salah satu kunci kesuksesan seseorang. Menyadari akan pentingnya personal branding baik di dunia kampus maupun kerja, kami mempersembahkan Instagram TakeOver yang akan mengupas seputar personal branding dari pembicara yang inspiratif dan berpengalaman.",
        gambar:"cs.png"
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
    return (
        <div className="preevent-timeline flex-col">
            <h1 className="sub-title">Timeline</h1>
            <div className='flex-row pointer-wrapper'>
                <div onClick={()=>setGroup(0)} className="pointer">
                    <div className="temlen">
                    <a className="tanggal" style={{left:"30px"}}>5 Februari 2021</a>
                    <a className="lipe">Live IG 1</a>
                    <a className="jdl">“Introduction of Collegacy Bandung and CBCC”</a>
                    </div>
                    
                </div>
                <div onClick={()=>setGroup(1)} className="pointer">
                <div className="temlen">
                    <a className="tanggal"style={{left:"30px"}}>20 Februari 2021</a>
                    <a className="lipe2">Live IG 2</a>
                    <a className="jdl2">“Break Your Limit ”</a>
                    </div>
                </div>
                <div onClick={()=>setGroup(2)} className="pointer">
                <div className="temlen">
                    <a className="tanggal"style={{left:"50px"}}>3 April 2021</a>
                    <a className="lipe"style={{lineHeight:"30px",top:"50px",width:"300px",left:"-20px"}}>Instagram TakeOver</a>
                    <a className="jdl">How to Build Personal Branding in the Digital Era</a>
                    </div>
                </div>
                <div onClick={()=>setGroup(3)} className="pointer">
                <div className="temlen">
                    <a className="tanggal"style={{left:"45px"}}>17 April 2021</a>
                    <a className="lipe2"style={{width:"300px",left:"35px"}}>ClubHouse I</a>
                    <a className="jdl2"style={{top:"-70px",width:"400px",left:"-100px",fontSize:"18px",lineHeight:"15px"}}>Outstanding Students 101: How to Become the Next Outstanding Student</a>
                    </div>
                </div>
                <div onClick={()=>setGroup(4)} className="pointer">
                <div className="temlen">
                    <a className="tanggal"style={{left:"55px"}}>2 Mei 2021</a>
                    <a className="lipe"style={{width:"300px",left:"35px"}}>ClubHouse II</a>
                    <a className="jdl"style={{width:"300px",left:"-30px"}}>To Be Announced</a>
                    </div>
                </div>
            </div>
            <Subheader nama={timelineGroup[group].nama} posisi={timelineGroup[group].posisi} judul={timelineGroup[group].judul} deskripsi={timelineGroup[group].deskripsi} gambar={timelineGroup[group].gambar} />
        </div>
    )
}


export default Timeline

