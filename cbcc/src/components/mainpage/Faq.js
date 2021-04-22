import React from 'react'
import Question from './faq/Question'

const listFaq = [
    {question:"Apakah itu Collegacy Business Case Competition?",answer:"CBCC adalah sebuah kompetisi yang menguji kemampuan para pesertanya dalam memecahkan masalah nyata yang diberikan. Tahapan CBCC dibagi menjadi dua, yaitu Individual Preliminary Challenge dan Collaboration Challenge. Pada Individual Preliminary Challenge, masing-masing peserta akan mengerjakan kasus secara individu. Setelah itu, 60 peserta terbaik akan dikelompokan dengan kriteria yang sudah ditentukan oleh panitia ke dalam 20 tim yang beranggotakan 3 orang. Kedua puluh tim tersebut akan mengerjakan kasus baru berdasarkan permasalahan nyata seputar dunia bisnis yang kemudian akan dipresentasikan di 5-minute pitch deck di semifinal. Kemudian, 5 tim terbaik akan melakukan Final Presentation dengan durasi yang lebih panjang dilanjutkan dengan sesi tanya jawab dengan dewan juri."},
    {question:"Apakah lombanya akan dilaksanakan secara daring?",answer:"Ya, seluruh bagian dari Collegacy Business Case Competition akan dilaksanakan secara daring."},
    {question:"Kapan CBCC akan dilaksanakan?",answer:"Collegacy Business Case Competition akan dilaksanakan dari tanggal 19 Mei hingga 20 Juni 2021."},
    {question:"Apa saja rangkaian acara dalam CBCC?",answer:"25-30 April: Pendaftaran Early Bird  [enter]1-15 Mei: Pendaftaran Normal [enter]19-31 Mei 2021: Individual Preliminary Challenge [enter] 22 Mei 2021: Workshop How to Design Your Way of Thinking [enter]11 Juni 2021: Announcement Top 60 [enter]12 Juni 2021: Workshop How to Make A Proper Pitch Deck [enter]12 Juni 2021 : Semi Final Technical Meeting [enter]12-18 Juni 2021: Collaboration Challenge Semifinal Stage [enter]19 Juni 2021: 5- Minutes Pitch Deck Presentation Semi Final [enter]20 Juni 2021: Collaboration Challenge Final Stage & Awarding Night"},
    {question:"Apakah ada biaya pendaftaran?",answer:"Ya. Untuk rincian biaya pendaftaran Collegacy Business Case Competition sebagai berikut: [enter]Pendaftaran early bird: Rp 50.000 [enter]Pendaftaran normal wave: Rp 65.000 [enter]Pendaftaran internasional: Rp 85.000"},
    {question:"Apakah ada biaya lain yang perlu saya bayar selain biaya pendaftaran?",answer:"Tidak ada biaya yang harus dibayarkan selain dari biaya pendaftaran."},
    {question:"Bagaimana metode pembayaran pendaftaran CBCC?",answer:"Pembayaran dapat dilakukan melalui platform GOERS dan pilih metode pembayaran yang sesuai."},
    {question:"Keuntungan apa saja yang akan saya terima setelah mengikuti kompetisi ini?",answer:"Berbeda dengan business case competition pada umumnya yang terdiri dari 3 orang per tim, CBCC kali ini dimulai dengan babak individual preliminary challenge yang menguji pesertanya secara individual. Dengan lulus tahap pertama, peserta akan memperoleh manfaat berupa network baru dengan dua orang yang tentunya memiliki kompetensi ambisi yang tinggi."},
    {question:"Apa saja syarat dan ketentuan pendaftaran CBCC?",answer:"- Peserta lomba merupakan Warga Negara Indonesia dan masih berstatus sebagai mahasiswa aktif tahap sarjana (S1), diploma, atau sederajat. [enter] - Peserta lomba maksimal berusia 23 tahun per tanggal 1 April 2021.[enter] - Peserta dapat berasal dari universitas manapun (dalam dan luar negeri).[enter] - Peserta mendaftar secara individu.[enter] - Setiap perguruan tinggi berhak mengajukan lebih dari satu peserta."},
    {question:"Bagaimana langkah-langkah pendaftaran CBCC?",answer:"1) Melakukan pembayaran via Goers [enter] 2) Mengisi formulir pendaftaran pada link yang diberikan dari email konfirmasi pembayaran[enter] 3) Melampirkan screenshot verifikasi pembayaran dari Goers yang diterima via email[enter]4) Melampirkan KTM (Kartu Tanda Mahasiswa)[enter] 5) Melampirkan bukti telah mem-follow akun @sejutacita.id, @collegacy.cbcc dan @collegacybandung di Instagram[enter] 6) Melampirkan screenshot bukti telah mem-posting twibbon[enter] 7) Melampirkan hasil test MBTI https://www.16personalities.com/ dan hasil karakter dominan tes DISC Personality dari situs dan hasil karakter dominan tes DISC Personality dari situs https://www.123test.com/disc-personality-test"},]

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
