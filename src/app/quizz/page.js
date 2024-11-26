import { useState, useEffect } from "react";
import { Button, Input, Card, Text } from "@nextui-org/react";

const questions = [
  {
    question: "Apa hukum Newton yang pertama?",
    answer: "Setiap benda akan tetap diam atau bergerak lurus beraturan kecuali ada gaya luar yang bekerja padanya."
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

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    setFeedback("");
    setUserAnswer("");
  }, [currentQuestion]);

  const handleSubmit = () => {
    if (userAnswer.toLowerCase().trim() === questions[currentQuestion].answer.toLowerCase()) {
      setFeedback("Jawaban Benar!");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizComplete(true);
      }
    } else {
      setFeedback("Jawaban Salah, coba lagi!");
    }
  };

  const handleSave = () => {
    alert("Progress telah disimpan!");
    // Tambahkan logika penyimpanan sesuai dengan backend Anda jika ada
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Card className="relative p-8 w-96 max-w-sm bg-white bg-opacity-40 backdrop-blur-md shadow-lg rounded-lg">
        <Text h2 className="text-center text-white mb-4">Quiz Hukum Newton</Text>
        {quizComplete ? (
          <Text className="text-center text-white">Selamat, Anda telah menyelesaikan quiz!</Text>
        ) : (
          <>
            <div className="mb-4">
              <Text className="text-white">{questions[currentQuestion].question}</Text>
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
              Cek Jawaban
            </Button>
            {feedback && <Text className={`text-center ${feedback.includes('Benar') ? 'text-green-500' : 'text-red-500'}`}>{feedback}</Text>}
          </>
        )}
        <div className="mt-4 flex justify-between">
          <Button color="secondary" onClick={handleSave}>
            Simpan
          </Button>
          <Button color="success" disabled={quizComplete} onClick={() => setCurrentQuestion(0)}>
            Mulai Lagi
          </Button>
        </div>
      </Card>
    </div>
  );
}
