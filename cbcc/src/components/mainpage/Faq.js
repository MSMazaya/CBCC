import React from 'react'
import Question from './faq/Question'

const listFaq = [
    {question:"Apakah itu Collegacy Business Case Competition?",answer:"CBCC adalah sebuah kompetisi yang menguji kemampuan para pesertanya dalam memecahkan masalah nyata yang diberikan. Tahapan CBCC dibagi menjadi dua, yaitu Individual Preliminary Challenge dan Collaboration Challenge. Pada Individual Preliminary Challenge, masing-masing peserta akan mengerjakan kasus secara individu. Setelah itu, 60 peserta terbaik akan dikelompokan dengan kriteria yang sudah ditentukan oleh panitia ke dalam 20 tim yang beranggotakan 3 orang. Kedua puluh tim tersebut akan mengerjakan kasus baru berdasarkan permasalahan nyata seputar dunia bisnis yang kemudian akan dipresentasikan di 5-minute pitch deck di semifinal. Kemudian, 5 tim terbaik akan melakukan Final Presentation dengan durasi yang lebih panjang dilanjutkan dengan sesi tanya jawab dengan dewan juri."},
    {question:"Apakah lombanya akan dilaksanakan secara daring?",answer:"Ya, seluruh bagian dari Collegacy Business Case Competition akan dilaksanakan secara daring."},
    {question:"Kapan CBCC akan dilaksanakan?",answer:"Collegacy Business Case Competition akan dilaksanakan dari tanggal 19 Mei hingga 20 Juni 2021."},
    {question:"Apa saja rangkaian acara dalam CBCC?",answer:"25-30 April: Pendaftaran Early Bird  1-15 Mei: Pendaftaran Normal 19-31 Mei 2021: Individual Preliminary Challenge [enter] 22 Mei 2021: Workshop How to Design Your Way of Thinking 11 Juni 2021: Announcement Top 60 12 Juni 2021: Workshop How to Make A Proper Pitch Deck 12 Juni 2021 : Semi Final Technical Meeting 12-18 Juni 2021: Collaboration Challenge Semifinal Stage 19 Juni 2021: 5- Minutes Pitch Deck Presentation Semi Final 20 Juni 2021: Collaboration Challenge Final Stage & Awarding Night"},
    {question:"Apakah ada biaya pendaftaran?",answer:"Ya. Untuk rincian biaya pendaftaran Collegacy Business Case Competition sebagai berikut: Pendaftaran early bird: Rp 50.000 Pendaftaran normal wave: Rp 65.000 Pendaftaran late registration: Rp 75.000 Pendaftaran internasional: Rp 85.000"},
    {question:"Apakah ada biaya lain yang perlu saya bayar selain biaya pendaftaran?",answer:"Belom tau"},
    {question:"Bagaimana metode pembayaran pendaftaran CBCC?",answer:"Belom tau"},
    {question:"Keuntungan apa saja yang akan saya terima setelah mengikuti kompetisi ini?",answer:"Berbeda dengan business case competition pada umumnya yang terdiri dari 3 orang per tim, CBCC kali ini dimulai dengan babak individual preliminary challenge yang menguji pesertanya secara individual. Dengan lulus tahap pertama, peserta akan memperoleh manfaat berupa network baru dengan dua orang yang tentunya memiliki kompetensi ambisi yang tinggi."},
    {question:"Apa saja syarat dan ketentuan pendaftaran CBCC?",answer:"Peserta lomba merupakan Warga Negara Indonesia dan masih berstatus sebagai mahasiswa aktif tahap sarjana (S1), diploma, atau sederajat. Peserta lomba maksimal berusia 23 tahun per tanggal 1 Maret 2021. Peserta dapat berasal dari universitas manapun (dalam dan luar negeri). Peserta mendaftar secara individu. Setiap perguruan tinggi berhak mengajukan lebih dari satu peserta."},
    {question:"Bagaimana langkah-langkah pendaftaran CBCC?",answer:"Melengkapi formulir pendaftaran Melampirkan KTM (Kartu Tanda Mahasiswa) Melampirkan bukti telah mem-follow akun @sejutacita.id, @collegacy.bcc, dan @collegacybandung di Instagram Melampirkan screenshot bukti telah mem-posting twibbon Melampirkan hasil test MBTI dari situs https://www.16personalities.com/ dan hasil karakter dominan tes DISC Personality dari situs https://www.123test.com/disc-personality-test Mentransfer biaya pendaftaran ke Melampirkan bukti transfer biaya pendaftaran"},]

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
