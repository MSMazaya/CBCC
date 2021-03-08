import React, {useState} from 'react'
import Subheader from './Subheader'

const timelineGroup = [
    {
        nama:"Rifka Novriani",
        posisi:"Project Officer at Collegacy Business Case Competition",
        judul:"“Introduction of Collegacy Bandung and CBCC”",
        deskripsi:"Bersama Project Officer dari acara ini, kami memperkenalkan Collegacy Bandung dan Collegacy Business Case Competition 2021 kepada publik, khususnya pengikut Instagram kami."
    },
    {
        nama:"Tarreq Kemal", // Al idrusnya nyusul wkwk soalnya gak tau cara parse enter lewat string ke react component
        posisi:"Chief Executive Officer at Akademis.id",
        judul:"“Break Your Limit”",
        deskripsi:"Mengangkat mahasiswa sebagai pembicara, kami ingin memberikan wawasan kepada penonton terkait cara mengontrol dan keluar dari limit yang ada dalam mengejar apa yang diimpikan."
    },
    {
        nama:"Secret Speaker",
        posisi: "Coming soon",
        judul:"“How to Build Personal Branding in the Digital Era1”",
        deskripsi:"Personal branding adalah salah satu kunci kesuksesan seseorang. Menyadari akan pentingnya personal branding baik di dunia kampus maupun kerja, kami mempersembahkan Instagram TakeOver yang akan mengupas seputar personal branding dari pembicara yang inspiratif dan berpengalaman.n"
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
                    <a className="tanggal">5 Februari</a>
                    <a className="lipe">Live IG 1</a>
                    <a className="jdl">“Introduction of Collegacy Bandung and CBCC”</a>
                    </div>
                    
                </div>
                <div onClick={()=>setGroup(1)} className="pointer">
                <div className="temlen">
                    <a className="tanggal">20 Februari</a>
                    <a className="lipe2">Live IG 2</a>
                    <a className="jdl2">“Break Your Limit ”</a>
                    </div>
                </div>
                <div onClick={()=>setGroup(2)} className="pointer">
                <div className="temlen">
                    <a className="tanggal">20 Maret</a>
                    <a className="lipe">Live IG 3</a>
                    <a className="jdl">“Outstanding Students 101”</a>
                    </div>
                </div>
            </div>
            <Subheader nama={timelineGroup[group].nama} posisi={timelineGroup[group].posisi} judul={timelineGroup[group].judul} deskripsi={timelineGroup[group].deskripsi} />
        </div>
    )
}


export default Timeline

