'use client'
import React, { useState, useEffect } from "react";
import { Button, Input, Card, CardBody, Progress } from "@nextui-org/react";
import Navbar from "@/components/navbar";

const Quiz = () => {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [showSolutions, setShowSolutions] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Generate questions
  function generateQuestion1() {
    const F1 = Math.floor(Math.random() * 99) + 1;
    const F2 = Math.floor(Math.random() * 99) + 1;
    const answer = F1 + F2;
    const question = `Seorang wanita mendorong sebuah meja dengan gaya F1 = ${F1} N ke arah timur, dan temannya juga mendorong meja dengan gaya F2 = ${F2} N ke arah yang sama. Berapa besar gaya total yang bekerja pada meja tersebut?`;
    return { id: 1, question, answer: answer.toFixed(2), F1, F2 };
  }

  function generateQuestion2() {
    const F1 = Math.floor(Math.random() * 99) + 1;
    const F2 = Math.floor(Math.random() * 99) + 1;
    const answer = F1 - F2;
    const question = `Seorang wanita mendorong sebuah meja dengan gaya F1 = ${F1} N ke arah utara, dan temannya mendorong meja dengan gaya F2 = ${F2} N ke arah selatan. Berapa besar gaya resultan yang bekerja pada meja tersebut?`;
    return { id: 2, question, answer: answer.toFixed(2), F1, F2 };
  }

  function generateQuestion3() {
    const massa = Math.floor(Math.random() * 99) + 1;
    const gravity = 9.8; // Percepatan gravitasi di bumi
    const answer = massa * gravity;
    const question = `Berapa besar gaya gravitasi yang bekerja pada benda dengan massa ${massa} kg?`;
    return { id: 3, question, answer: answer.toFixed(2), massa, gravity };
  }

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

        return { id: 4, question, answer: answer.toFixed(2) };
    };

    const generateQuestion5 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const percepatan = Math.floor(Math.random() * 99) + 1;
        const total = Math.floor(Math.random() * 99) + 1;
        const resultan = massa * percepatan;
        const answer = total - resultan;
        const question = `Sebuah peti bermassa ${massa} kg bergerak di atas lantai kasar dengan percepatan ${percepatan} m/s². Jika gaya total yang bekerja pada peti adalah ${total} N, berapakah gaya gesekan yang dialami peti tersebut?`;

        return { id: 5, question, answer: answer.toFixed(2) };
    };

    const generateQuestion6 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const gaya = Math.floor(Math.random() * 99) + 1;
        const answer = massa / gaya;
        const question = `Sebuah balok bermassa ${massa} kg didorong dengan gaya ${gaya} N pada bidang miring licin`;

        return { id: 6, question, answer: answer.toFixed(2) };
    };

    const generateQuestion7 = () => {
        const konstanta = Math.floor(Math.random() * 99) + 1;
        const panjang = Math.floor(Math.random() * 99) + 1;
        const answer = konstanta * panjang;
        const question = `Sebuah pegas memiliki konstanta pegas k = ${konstanta} N/m. Jika pegas ditarik hingga mengalami pertambahan panjang sebesar ${panjang} m, berapakah besar gaya yang diperlukan untuk menarik pegas tersebut?`;

        return { id: 7, question, answer: answer.toFixed(2) };
    };

    const generateQuestion8 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1;
        const gravitasi = 10;
        const answer = massa * koefisien * gravitasi;
        const question = `Sebuah balok dengan massa ${massa} kg berada di atas permukaan datar. Koefisien gesek statis antara balok dan permukaan adalah ${koefisien}. Berapakah gaya horizontal minimum yang diperlukan untuk menggerakkan balok tersebut jika menggunakan gravitasi ${gravitasi} m/s²?`;

        return { id: 8, question, answer: answer.toFixed(2) };
    };

    const generateQuestion9 = () => {
        const massa = Math.floor(Math.random() * 99) + 1;
        const gaya = Math.floor(Math.random() * 99) + 1;
        const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1;
        const gravitasi = 10;
        const gesek = koefisien * massa * gravitasi;
        const answer = gaya - gesek;
        const question = `Sebuah balok bermassa ${massa} kg ditarik di atas permukaan kasar dengan gaya horizontal sebesar ${gaya} N. Koefisien gesek kinetis antara balok dan permukaan adalah ${koefisien}. Berapakah percepatan balok tersebut?`;

        return { id: 9, question, answer: answer.toFixed(2) };
    };
  // Additional question generation functions go here...

  const navigationSections = [
    'Nomor 1 - 3',
    'Nomor 4 - 6',
    'Nomor 7 - 9',
    'Nomor 10 - 12',
    'Nomor 13 - 15'
  ];

  // Initialize questions on mount
  useEffect(() => {
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
      
    ];
    setActiveQuestions(questions);
  }, []);

  // Get current questions based on section
  const getCurrentQuestions = () => {
    const startIndex = currentSection * 3;
    return activeQuestions.slice(startIndex, startIndex + 3);
  };

  // Handle answer input with immediate checking
  const handleAnswerInput = (questionId, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  // Update progress whenever userAnswers changes
  useEffect(() => {
    const answeredQuestions = Object.keys(userAnswers).length;
    const newProgress = Math.round((answeredQuestions / activeQuestions.length) * 100);
    setProgress(newProgress);
  }, [userAnswers, activeQuestions.length]);

  // Handle section change
  const handleSectionChange = (index) => {
    setCurrentSection(index);
    setSubmitted(false); // Reset submission state on section change
  };

  // Get solution steps for a question
  const getSolutionSteps = (question) => {
    switch (question.id) {
      case 1:
        return `
          Diketahui:
          • F1 = ${question.F1} N (ke timur)
          • F2 = ${question.F2} N (ke timur)
          
          Penyelesaian:
          1. Karena kedua gaya searah (ke timur), maka dijumlahkan
          2. F total = F1 + F2
          3. F total = ${question.F1} + ${question.F2}
          4. F total = ${question.answer} N
        `;
      case 2:
        return `
          Diketahui:
          • F1 = ${question.F1} N (ke utara)
          • F2 = ${question.F2} N (ke selatan)
          
          Penyelesaian:
          1. Karena gaya berlawanan arah, F2 bernilai negatif
          2. F resultan = F1 - F2
          3. F resultan = ${question.F1} - ${question.F2}
          4. F resultan = ${question.answer} N
        `;
      case 3:
        return `
          Diketahui:
          • m = ${question.massa} kg
          • g = ${question.gravity} m/s²
          
          Penyelesaian:
          1. Gaya gravitasi = massa × percepatan gravitasi
          2. W = m × g
          3. W = ${question.massa} × ${question.gravity}
          4. W = ${question.answer} N
        `;
      default:
        return "Pembahasan belum tersedia untuk soal ini.";
    }
  };

  // Calculate the number of correct answers
  const getCorrectAnswersCount = () => {
    let correctCount = 0;
    activeQuestions.forEach(question => {
      if (parseFloat(userAnswers[question.id]) === parseFloat(question.answer)) {
        correctCount += 1;
      }
    });
    return correctCount;
  };

  return (
    <main className="mx-24">
      <Navbar />
      <div className="flex justify-center items-center min-h-[94.8dvh] relative">
        <div className="flex gap-4 p-4">
          {/* Main Content */}
          <div className="flex-1">
            {!submitted ? (
              getCurrentQuestions().map((question) => (
                <Card 
                  key={question.id} 
                  className={`shadow-lg mb-4`}
                >
                  <CardBody className="space-y-6">
                    <div className="space-y-4">
                      <div className="font-medium">Soal No {question.id}</div>
                      <p className="text-gray-700">{question.question}</p>
                      <Input 
                        type="number"
                        placeholder="Masukkan jawaban" 
                        value={userAnswers[question.id] || ''}
                        onChange={(e) => handleAnswerInput(question.id, e.target.value)}
                        className="w-full max-w-xs"
                      />
                    </div>
                  </CardBody>
                </Card>
              ))
            ) : (
              <div className="space-y-4">
                {getCurrentQuestions().map((question) => (
                  <Card key={question.id} className="mb-4 p-4">
                    <div className="space-y-4">
                      <div className="font-medium">Soal No {question.id}</div>
                      <p className="text-gray-700">{question.question}</p>
                    </div>
                    <pre className="whitespace-pre-wrap font-mono text-sm mt-4">
                      {getSolutionSteps(question)}
                    </pre>
                    <div className="mt-2">
                      <span className={`text-lg ${parseFloat(userAnswers[question.id]) === parseFloat(question.answer) ? 'text-green-500' : 'text-red-500'}`}>
                        {parseFloat(userAnswers[question.id]) === parseFloat(question.answer) ? 'Benar' : 'Salah'}
                      </span>
                    </div>
                  </Card>
                ))}
                <div className="mt-6 font-medium">
                  Total Benar: {getCorrectAnswersCount()} dari {getCurrentQuestions().length}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-64 space-y-4">
            {/* Progress Circle */}
            <Card className="shadow-lg">
              <CardBody className="flex items-center justify-center p-6">
                <div className="relative w-24 h-[120px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-green-600">
                      {progress}%
                    </span>
                  </div>
                  <Progress value={progress} className="w-24 h-24 rounded-full" />
                </div>
              </CardBody>
            </Card>

            {/* Navigation Panel */}
            <Card className="shadow-lg">
              <CardBody className="space-y-4">
                <div className="font-medium">Panel Navigasi</div>
                <div className="space-y-2">
                  {navigationSections.map((section, index) => (
                    <Button
                      key={index}
                      variant={currentSection === index ? "solid" : "outline"}
                      color="primary"
                      fullWidth
                      onClick={() => handleSectionChange(index)}
                    >
                      {section}
                    </Button>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Submit Button */}
            <div className="mt-6">
              <Button 
                onClick={() => setSubmitted(true)} 
                fullWidth
                color="success"
              >
                Submit Soal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Quiz;
