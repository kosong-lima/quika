'use client';

import { useState, useEffect } from "react";
import { Button, Input, Card } from "@nextui-org/react";
import Navbar from "@/components/navbar";

// Pertanyaan yang sudah ditentukan
const questions = [
  {
    question: "Alfi?",
    answer: "Kanjeng"
  },
  {
    question: "Apa hukum Newton yang kedua?",
    answer: "Percepatan suatu benda berbanding lurus dengan gaya total yang bekerja padanya dan berbanding terbalik dengan massa benda."
  },
  {
    question: "Apa hukum Newton yang ketiga?",
    answer: "Setiap aksi akan menimbulkan reaksi yang sama besar dan berlawanan arah."
  },
];

export default function QuizzPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);  // Menyimpan soal yang sudah diacak

  // Mengacak urutan soal setiap kali komponen pertama kali dimuat
  useEffect(() => {
    // Membuat salinan dari array questions dan mengacak urutannya
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);  // Menjalankan hanya sekali saat komponen pertama kali dimuat

  // Reset jawaban dan feedback ketika soal berubah
  useEffect(() => {
    setFeedback("");
    setUserAnswer("");
  }, [currentQuestion]);

  const handleSubmit = () => {
    if (userAnswer.toLowerCase().trim() === shuffledQuestions[currentQuestion].answer.toLowerCase()) {
      setFeedback("Jawaban Benar!");
      if (currentQuestion < shuffledQuestions.length - 1) {
        setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1000); // Pindah ke soal berikut setelah 1 detik
      } else {
        setQuizComplete(true); // Jika soal sudah habis, quiz selesai
      }
    } else {
      setFeedback("Jawaban Salah, ulangi soal!");
      setTimeout(() => setFeedback(""), 2000); // Hapus feedback setelah 2 detik
    }
  };

  return (
    <main className="mx-24">
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen">
        <div className="absolute inset-0 "></div>
        <Card className="relative p-8 w-96 max-w-sm bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          <h2 className="text-center text-black mb-4">QUIKA | Quizz Fisika</h2>
          {quizComplete ? (
            <p className="text-center text-black">Selamat, Anda telah menyelesaikan quiz!</p>
          ) : (
            <>
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
        </Card>
      </div>
    </main>
  );
}
