"use client"

import React, { useState, useEffect } from "react"
import { Button, Input, Card } from "@nextui-org/react"
import Navbar from "@/components/navbar"

const Quizz = () => {
    function generateQuestion1() {
        const F1 = Math.floor(Math.random() * 99) + 1
        const F2 = Math.floor(Math.random() * 99) + 1
        const answer = F1 + F2
        const question = `Seorang wanita mendorong sebuah meja dengan gaya F1 = ${F1} N ke arah timur, dan temannya juga mendorong meja dengan gaya F2 = ${F2} N ke arah yang sama. Berapa besar gaya total yang bekerja pada meja tersebut?`

        return { question, answer: answer.toFixed(2) } // tofixed = ngambil hanya 2 angka dibelakang kome
        // 98.12
    }

    function generateQuestion2() {
        const F1 = Math.floor(Math.random() * 99) + 1
        const F2 = Math.floor(Math.random() * 99) + 1
        const answer = F1 - F2
        const question = `Rusdi menarik tali dengan gaya F1 = ${F1} N ke arah utara, sementara orang lain menarik tali yang sama dengan gaya F2 = ${F2} N ke arah selatan. Berapa besar resultan gaya yang bekerja?`

        return { question, answer: answer.toFixed(2) }
    }

    function generateQuestion3() {
        const massa = Math.floor(Math.random() * 99) + 1
        const gravity = 10
        const answer = massa * gravity
        const question = `Sebuah kotak dengan massa ${massa} kg diletakkan di atas meja datar dan tetap diam. Jika percepatan gravitasi g = ${gravity} m/s², hitunglah berapa gaya gravitasi yang bekerja pada kotak?`

        return { question, answer: answer.toFixed(2) }
    }

    function generateQuestion4() {
        const massa = Math.floor(Math.random() * 99) + 1
        const total = Math.floor(Math.random() * 99) + 1
        let gesek
        do {
            gesek = Math.floor(Math.random() * 99) + 1
        } while (gesek >= total)
        const resultan = total - gesek
        const answer = resultan / massa
        const question = `Sebuah gaya ${total} N bekerja pada sebuah benda bermassa ${massa} kg. Jika gaya gesekan yang melawan gerak benda sebesar ${gesek} N, berapakah percepatan benda tersebut?`

        return { question, answer: answer.toFixed(2) }
    }

    function generateQuestion5() {
        const massa = Math.floor(Math.random() * 99) + 1
        const percepatan = Math.floor(Math.random() * 99) + 1
        const total = Math.floor(Math.random() * 99) + 1
        const resultan = massa * percepatan
        const answer = total - resultan
        const question = `Sebuah peti bermassa ${massa} kg bergerak di atas lantai kasar dengan percepatan ${percepatan} m/s². Jika gaya total yang bekerja pada peti adalah ${total} N, berapakah gaya gesekan yang dialami peti tersebut?`

        return { question, answer: answer.toFixed(2) }
    }

    function generateQuestion6() {
        const massa = Math.floor(Math.random() * 99) + 1
        const gaya = Math.floor(Math.random() * 99) + 1
        const answer = massa / gaya
        const question = `Sebuah balok bermassa ${massa} kg didorong dengan gaya ${gaya} N pada bidang miring licin`

        return { question, answer: answer.toFixed(2) }
    }

    function generateQuestion7() {
        const konstanta = Math.floor(Math.random() * 99) + 1
        const panjang = Math.floor(Math.random() * 99) + 1
        const answer = konstanta * panjang
        const question = `Sebuah pegas memiliki konstanta pegas k = ${konstanta} N/m . Jika pegas ditarik hingga mengalami pertambahan panjang sebesar ${panjang} m, berapakah besar gaya yang diperlukan untuk menarik pegas tersebut?`

        return { question, answer: answer.toFixed(2) }
    }

    function generateQuestion8() {
        const massa = Math.floor(Math.random() * 99) + 1 // 1-99
        const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1 //0,1 - 0,9
        const gravitasi = 10
        const answer = massa * koefisien * gravitasi
        const question = `Sebuah balok dengan massa ${massa} kg berada di atas permukaan datar. Koefisien gesek statis antara balok dan permukaan adalah ${koefisien}. Berapakah gaya horizontal minimum yang diperlukan untuk menggerakkan balok tersebut jika menggunakan gravitasi ${gravitasi} m/s²?`
        return { question, answer: answer.toFixed(2) }
    }

    function generateQuestion9() {
        const massa = Math.floor(Math.random() * 99) + 1
        const gaya = Math.floor(Math.random() * 99) + 1
        const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1
        const gravitasi = 10
        const gesek = koefisien * massa * gravitasi
        const answer = gaya - gesek
        const question = `Sebuah balok bermassa ${massa} kg ditarik di atas permukaan kasar dengan gaya horizontal sebesar ${gaya} N. Koefisien gesek kinetis antara balok dan permukaan adalah ${koefisien}. Berapakah percepatan balok tersebut?`
        return { question, answer: answer.toFixed(2) }
    }

    const questions = [
        generateQuestion1(),
        generateQuestion2(),
        generateQuestion3(),
        generateQuestion4(),
        generateQuestion5(),
        generateQuestion6(),
        generateQuestion7(),
        generateQuestion8(),
        generateQuestion9(),
    ]

    const [shuffledQuestions, setShuffledQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswer, setUserAnswer] = useState("")
    const [feedback, setFeedback] = useState("")
    const [quizComplete, setQuizComplete] = useState(false)
    const [quizStarted, setQuizStarted] = useState(false) // Menyimpan status quiz (dimulai atau belum)

    // Mengacak soal saat komponen pertama kali dimuat
    useEffect(() => {
        setShuffledQuestions(questions.sort(() => Math.random() - 0.5))
    }, [])

    // Handle submit jawaban
    const handleSubmit = () => {
        const correctAnswer = shuffledQuestions[currentQuestion].answer

        // Cek apakah jawaban benar
        if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
            setFeedback("Benar! Hebat, kamu berhasil menjawab soal dengan tepat!")

            // Cek jika sudah menjawab soal terakhir
            setQuizComplete(true)
        } else {
            setFeedback("Jawaban salah. Coba lagi dengan soal yang baru!")
            setUserAnswer("") // Reset jawaban
            // Acak soal dan tampilkan soal baru jika jawaban salah
            setCurrentQuestion(Math.floor(Math.random() * shuffledQuestions.length))
        }
    }

    // Mulai quiz
    const startQuiz = () => {
        setQuizStarted(true)
    }

    // Restart quiz
    const restartQuiz = () => {
        setQuizComplete(false)
        setCurrentQuestion(0)
        setUserAnswer("")
        setFeedback("")
        setQuizStarted(true)
    }

    // Exit quiz
    const handleExitQuiz = () => {
        setQuizStarted(false)
        setQuizComplete(false)
        setCurrentQuestion(0)
        setUserAnswer("")
        setFeedback("")
    }

    return (
        <main className="mx-24">
            <Navbar />
            <div className="flex justify-center items-center min-h-[94dvh] relative">
                <div className="absolute inset-0"></div>
                <Card className="relative max-w-sm p-8 bg-white rounded-lg shadow-lg w-96 bg-opacity-60 backdrop-blur-md">
                    {/* Menampilkan bagian awal quiz jika belum dimulai */}
                    {!quizStarted ? (
                        <>
                            <h2 className="mb-4 text-center text-black">QUIKA | Quizz Fisika</h2>
                            <Button onClick={startQuiz} color="primary" className="w-full">
                                Mulai Quiz
                            </Button>
                        </>
                    ) : (
                        <>
                            {/* Menampilkan bagian quiz jika sedang berlangsung */}
                            {quizComplete ? (
                                <div className="text-center">
                                    <p className="text-black">Selamat, Anda telah menyelesaikan quiz!</p>
                                    <Button onClick={restartQuiz} color="primary" className="w-full mt-4">
                                        Mulai Lagi
                                    </Button>
                                    <Button onClick={handleExitQuiz} color="secondary" className="w-full mt-4">
                                        Akhiri Quiz
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="mb-4 text-center text-black">QUIKA | Quizz Fisika</h2>
                                    <div className="mb-4">
                                        <p className="text-black">{shuffledQuestions[currentQuestion]?.question}</p>
                                    </div>
                                    <Input
                                        aria-label="Your answer"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        fullWidth
                                        clearable
                                        className="mb-4"
                                    />
                                    <p className="text-black">{shuffledQuestions[currentQuestion]?.answer}</p>
                                    <Button onClick={handleSubmit} color="primary" className="w-full mb-4">
                                        Simpan
                                    </Button>
                                    {feedback && (
                                        <p
                                            className={`text-center ${
                                                feedback.includes("Benar") ? "text-green-500" : "text-red-500"
                                            }`}
                                        >
                                            {feedback}
                                        </p>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </Card>
            </div>
        </main>
    )
}

export default Quizz
