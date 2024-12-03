import React from "react";
import MenuHeader from "./MenuHeader";
import Link from "next/link";

export default function Banksoal() {

    // Generate Question Functions
    const generateQuestion1 = () => {
        const F1 = Math.floor(Math.random() * 99) + 1;
        const F2 = Math.floor(Math.random() * 99) + 1;
        const answer = F1 + F2;
        const question = `Seorang wanita mendorong sebuah meja dengan gaya F1 = ${F1} N ke arah timur, dan temannya juga mendorong meja dengan gaya F2 = ${F2} N ke arah yang sama. Berapa besar gaya total yang bekerja pada meja tersebut?`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion2 = () => {
        const F1 = Math.floor(Math.random() * 99) + 1;
        const F2 = Math.floor(Math.random() * 99) + 1;
        const answer = F1 - F2;
        const question = `Rusdi menarik tali dengan gaya F1 = ${F1} N ke arah utara, sementara orang lain menarik tali yang sama dengan gaya F2 = ${F2} N ke arah selatan. Berapa besar resultan gaya yang bekerja?`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion3 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const gravity = 10;
        const answer = massa * gravity;
        const question = `Sebuah kotak dengan massa ${massa} kg diletakkan di atas meja datar dan tetap diam. Jika percepatan gravitasi g = ${gravity} m/s², hitunglah berapa gaya gravitasi yang bekerja pada kotak?`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion4 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const total = Math.floor(Math.random() * 99) + 1;
        let gesek;
        do {
            gesek = Math.floor(Math.random() * 99) + 1;
        } while (gesek >= total);

        const resultan = total - gesek;
        const answer = resultan / massa;
        const question = `Sebuah gaya ${total} N bekerja pada sebuah benda bermassa ${massa} kg. Jika gaya gesekan yang melawan gerak benda sebesar ${gesek} N, berapakah percepatan benda tersebut?`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion5 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const percepatan = Math.floor(Math.random() * 99) + 1;
        const total = Math.floor(Math.random() * 99) + 1;
        const resultan = massa * percepatan;
        const answer = total - resultan;
        const question = `Sebuah peti bermassa ${massa} kg bergerak di atas lantai kasar dengan percepatan ${percepatan} m/s². Jika gaya total yang bekerja pada peti adalah ${total} N, berapakah gaya gesekan yang dialami peti tersebut?`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion6 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const gaya = Math.floor(Math.random() * 99) + 1;
        const answer = massa / gaya;
        const question = `Sebuah balok bermassa ${massa} kg didorong dengan gaya ${gaya} N pada bidang miring licin`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion7 = () => {
        const konstanta = Math.floor(Math.random() * 99) + 1;
        const panjang = Math.floor(Math.random() * 99) + 1;
        const answer = konstanta * panjang;
        const question = `Sebuah pegas memiliki konstanta pegas k = ${konstanta} N/m. Jika pegas ditarik hingga mengalami pertambahan panjang sebesar ${panjang} m, berapakah besar gaya yang diperlukan untuk menarik pegas tersebut?`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion8 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1;
        const gravitasi = 10;
        const answer = massa * koefisien * gravitasi;
        const question = `Sebuah balok dengan massa ${massa} kg berada di atas permukaan datar. Koefisien gesek statis antara balok dan permukaan adalah ${koefisien}. Berapakah gaya horizontal minimum yang diperlukan untuk menggerakkan balok tersebut jika menggunakan gravitasi ${gravitasi} m/s²?`;

        return { question, answer: answer.toFixed(2) };
    };

    const generateQuestion9 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const gaya = Math.floor(Math.random() * 99) + 1;
        const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1;
        const gravitasi = 10;
        const gesek = koefisien * massa * gravitasi;
        const answer = gaya - gesek;
        const question = `Sebuah balok bermassa ${massa} kg ditarik di atas permukaan kasar dengan gaya horizontal sebesar ${gaya} N. Koefisien gesek kinetis antara balok dan permukaan adalah ${koefisien}. Berapakah percepatan balok tersebut?`;

        return { question, answer: answer.toFixed(2) };
    };

    return (
        <div>
            <MenuHeader />
            {/* Your Navbar content here */}
        </div>
    );
}
