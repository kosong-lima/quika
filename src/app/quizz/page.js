"use client";

import React, { useState, useEffect } from "react";
import { Button, Input, Card } from "@nextui-org/react";
import Navbar from "@/components/navbar";

const Quizz = () => {
  const questions = [
    { question: "Seorang Wanita mendorong sebuah meja dengan gaya ​F1 = 5N ke arah timur, dan temannya juga mendorong meja dengan gaya F2 = 3N ke arah yang sama. Berapa besar gaya total yang bekerja pada meja tersebut?",
      answer: "8" },
    { question: "Rusdi menarik tali dengan gaya F1 = 8N ke arah utara, sementara orang lain menarik tali yang sama dengan gaya F2 = 5 N ke arah selatan. Berapa besar resultan gaya yang bekerja? dan kearah  mana ressultan gaya tersebut?",
      answer: "3" },
    { question: "Sebuah kotak dengan massa 2 kg diletakkan di atas meja datar dan tetap diam. Jika percepatan gravitasi g = 10 m / s2 Hitunglah berapa gaya gravitasi yang bekerja pada kotak?",
      answer: "20" },
    { question: "Sebuah gaya 60 N bekerja pada sebuah benda bermassa 15 kg. Jika gaya gesekan yang melawan gerak benda sebesar 20 N, berapakah percepatan benda tersebut?",
      answer: "2,67" },
    { question: "Sebuah peti bermassa 20 kg bergerak di atas lantai kasar dengan percepatan 1 m/s². Jika gaya total yang bekerja pada peti adalah 40 N, berapakah gaya gesekan yang dialami peti tersebut?",
      answer: "20" },
    { question: "Sebuah balok bermassa 8 kg didorong dengan gaya 40 N pada bidang miring licin",
      answer: "5" },
    { question: "Sebuah pegas memiliki konstanta pegas  k = 200 N/m . Jika pegas ditarik hingga mengalami pertambahan panjang sebesar 0,1 m, berapakah besar gaya yang diperlukan untuk menarik pegas tersebut?",
      answer: "20" },
    { question: "Sebuah balok dengan massa 5 kg berada di atas permukaan datar. Koefisien gesek statis antara balok dan permukaan adalah 0,4. Berapakah gaya horizontal minimum yang diperlukan untuk menggerakkan balok tersebut?",
      answer: "19,6" },
    { question: "Sebuah balok bermassa 4 kg ditarik di atas permukaan kasar dengan gaya horizontal sebesar 30 N. Koefisien gesek kinetis antara balok dan permukaan adalah 0,2. Berapakah percepatan balok tersebut?",
      answer: "5,54" },
   
    // Tambahkan soal lainnya sesuai kebutuhan
  ];

  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false); // Menyimpan status quiz (dimulai atau belum)

  // Mengacak soal saat komponen pertama kali dimuat
  useEffect(() => {
    setShuffledQuestions(questions.sort(() => Math.random() - 0.5));
  }, []);

  // Handle submit jawaban
  const handleSubmit = () => {
    const correctAnswer = shuffledQuestions[currentQuestion].answer;

    // Cek apakah jawaban benar
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Benar! Hebat, kamu berhasil menjawab soal dengan tepat!");

      // Cek jika sudah menjawab soal terakhir
      setQuizComplete(true)
    } else {
      setFeedback("Jawaban salah. Coba lagi dengan soal yang baru!");
      setUserAnswer(""); // Reset jawaban
      // Acak soal dan tampilkan soal baru jika jawaban salah
      setCurrentQuestion(Math.floor(Math.random() * shuffledQuestions.length)); 
    }
  };

  // Mulai quiz
  const startQuiz = () => {
    setQuizStarted(true);
  };

  // Restart quiz
  const restartQuiz = () => {
    setQuizComplete(false);
    setCurrentQuestion(0);
    setUserAnswer("");
    setFeedback("");
    setQuizStarted(true);
  };

  // Exit quiz
  const handleExitQuiz = () => {
    setQuizStarted(false);
    setQuizComplete(false);
    setCurrentQuestion(0);
    setUserAnswer("");
    setFeedback("");
  };

  return (
    <main className="mx-24">
      <Navbar />
      <div className="flex justify-center items-center min-h-[94dvh] relative">
        <div className="absolute inset-0"></div>
        <Card className="relative p-8 w-96 max-w-sm bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          {/* Menampilkan bagian awal quiz jika belum dimulai */}
          {!quizStarted ? (
            <>
              <h2 className="text-center text-black mb-4">QUIKA | Quizz Fisika</h2>
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
                  <h2 className="text-center text-black mb-4">QUIKA | Quizz Fisika</h2>
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
                  <Button onClick={handleSubmit} color="primary" className="mb-4 w-full">
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
  );
};

export default Quizz;

