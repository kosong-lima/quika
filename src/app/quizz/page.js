'use client'
import React, { useState, useEffect } from "react";
import { Button, Input, Card, CardBody, Progress } from "@nextui-org/react";
import Navbar from "@/components/navbar";

// Question generation functions
const generateQuestions = () => {
  const generateQuestion1 = () => {
    const F1 = Math.floor(Math.random() * 99) + 1;
    const F2 = Math.floor(Math.random() * 99) + 1;
    const answer = F1 + F2;
    const question = `Seorang wanita mendorong sebuah meja dengan gaya F1 = ${F1} N ke arah timur, dan temannya juga mendorong meja dengan gaya F2 = ${F2} N ke arah yang sama. Berapa besar gaya total yang bekerja pada meja tersebut?`;
    const solution = `Diketahui: F1 = ${F1} N, F2 = ${F2} N; Gaya total = F1 + F2 = ${answer} N`;
    return { id: 1, question, answer: answer.toFixed(2), solution };
  };

  const generateQuestion2 = () => {
    const F1 = Math.floor(Math.random() * 99) + 1;
    const F2 = Math.floor(Math.random() * 99) + 1;
    const answer = F1 - F2;
    const question = `Seorang wanita mendorong meja dengan gaya F1 = ${F1} N ke utara, temannya mendorong meja dengan gaya F2 = ${F2} N ke selatan. Berapa besar gaya resultan yang bekerja pada meja tersebut?`;
    const solution = `Diketahui: F1 = ${F1} N, F2 = ${F2} N; F resultan = F1 - F2 = ${answer} N`;
    return { id: 2, question, answer: answer.toFixed(2), solution };
  };

  const generateQuestion3 = () => {
    const massa = Math.floor(Math.random() * 99) + 1;
    const gravity = 9.8;
    const answer = massa * gravity;
    const question = `Berapa besar gaya gravitasi yang bekerja pada benda dengan massa ${massa} kg?`;
    const solution = `Diketahui: massa = ${massa} kg, g = ${gravity} m/s²; Gaya gravitasi = massa × g = ${answer} N`;
    return { id: 3, question, answer: answer.toFixed(2), solution };
  };

  function generateQuestion4() {
    const massa = Math.floor(Math.random() * 99) + 1;
    const total = Math.floor(Math.random() * 99) + 1;
    let gesek;
    do {
        gesek = Math.floor(Math.random() * 99) + 1;
    } while (gesek >= total);
    const resultan = total - gesek;
    const answer = resultan / massa;
    const question = `Sebuah gaya ${total} N bekerja pada sebuah benda bermassa ${massa} kg. Jika gaya gesekan yang melawan gerak benda sebesar ${gesek} N, berapakah percepatan benda tersebut?`;
    const solution = `Diketahui: Gaya total = ${total} N, Gaya gesekan = ${gesek} N, Massa = ${massa} kg; Percepatan = (Gaya total - Gaya gesekan) / Massa = (${total} - ${gesek}) / ${massa} = ${answer.toFixed(2)} m/s²`;
    return { id: 4, question, answer: answer.toFixed(2), solution };
  };

  function generateQuestion5() {
    const massa = Math.floor(Math.random() * 99) + 1;
    const percepatan = Math.floor(Math.random() * 99) + 1;
    const total = Math.floor(Math.random() * 99) + 1;
    const resultan = massa * percepatan;
    const answer = total - resultan;
    const question = `Sebuah peti bermassa ${massa} kg bergerak di atas lantai kasar dengan percepatan ${percepatan} m/s². Jika gaya total yang bekerja pada peti adalah ${total} N, berapakah gaya gesekan yang dialami peti tersebut?`;
    const solution = `Diketahui: Massa = ${massa} kg, Percepatan = ${percepatan} m/s², Gaya total = ${total} N; Gaya gesekan = Gaya total - (Massa * Percepatan) = ${total} - (${massa} * ${percepatan}) = ${answer.toFixed(2)} N`;
    return { id: 5, question, answer: answer.toFixed(2), solution };
  }

  function generateQuestion6() {
    const massa = Math.floor(Math.random() * 99) + 1;
    const gaya = Math.floor(Math.random() * 99) + 1;
    const answer = massa / gaya;
    const question = `Sebuah balok bermassa ${massa} kg didorong dengan gaya ${gaya} N pada bidang miring licin.`;
    const solution = `Diketahui: Massa = ${massa} kg, Gaya = ${gaya} N; Percepatan = Massa / Gaya = ${massa} / ${gaya} = ${answer.toFixed(2)} m/s²`;
    return { id: 6, question, answer: answer.toFixed(2), solution };
  }

  function generateQuestion7() {
    const konstanta = Math.floor(Math.random() * 99) + 1;
    const panjang = Math.floor(Math.random() * 99) + 1;
    const answer = konstanta * panjang;
    const question = `Sebuah pegas memiliki konstanta pegas k = ${konstanta} N/m . Jika pegas ditarik hingga mengalami pertambahan panjang sebesar ${panjang} m, berapakah besar gaya yang diperlukan untuk menarik pegas tersebut?`;
    const solution = `Diketahui: Konstanta pegas k = ${konstanta} N/m, Panjang pertambahan = ${panjang} m; Gaya = k * Panjang = ${konstanta} * ${panjang} = ${answer.toFixed(2)} N`;
    return { id: 7, question, answer: answer.toFixed(2), solution };
  }

  function generateQuestion8() {
    const massa = Math.floor(Math.random() * 99) + 1; // 1-99
    const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1; // 0,1 - 0,9
    const gravitasi = 10;
    const answer = massa * koefisien * gravitasi;
    const question = `Sebuah balok dengan massa ${massa} kg berada di atas permukaan datar. Koefisien gesek statis antara balok dan permukaan adalah ${koefisien}. Berapakah gaya horizontal minimum yang diperlukan untuk menggerakkan balok tersebut jika menggunakan gravitasi ${gravitasi} m/s²?`;
    const solution = `Diketahui: Massa = ${massa} kg, Koefisien gesek statis = ${koefisien}, Gravitasi = ${gravitasi} m/s²; Gaya horizontal minimum = Massa * Koefisien gesek * Gravitasi = ${massa} * ${koefisien} * ${gravitasi} = ${answer.toFixed(2)} N`;
    return { id: 8, question, answer: answer.toFixed(2), solution };
  }

  function generateQuestion9() {
    const massa = Math.floor(Math.random() * 99) + 1;
    const gaya = Math.floor(Math.random() * 99) + 1;
    const koefisien = Math.floor(Math.random() * 9) / 10 + 0.1;
    const gravitasi = 10;
    const gesek = koefisien * massa * gravitasi;
    const answer = gaya - gesek;
    const question = `Sebuah balok bermassa ${massa} kg ditarik di atas permukaan kasar dengan gaya horizontal sebesar ${gaya} N. Koefisien gesek kinetis antara balok dan permukaan adalah ${koefisien}. Berapakah percepatan balok tersebut?`;
    const solution = `Diketahui: Massa = ${massa} kg, Gaya = ${gaya} N, Koefisien gesek = ${koefisien}, Gravitasi = ${gravitasi} m/s²; Gaya gesekan = Koefisien gesek * Massa * Gravitasi = ${koefisien} * ${massa} * ${gravitasi} = ${gesek.toFixed(2)} N; Percepatan = (Gaya - Gaya gesekan) / Massa = (${gaya} - ${gesek.toFixed(2)}) / ${massa} = ${answer.toFixed(2)} m/s²`;
    return { id: 9, question, answer: answer.toFixed(2), solution };
}





  // Add other question generators here...

  return [
    generateQuestion1(),
    generateQuestion2(),
    generateQuestion3(),
    generateQuestion4(),
    generateQuestion5(),
    generateQuestion6(),
    generateQuestion7(),
    generateQuestion8(),
    generateQuestion9(),
    // Add the rest of the questions
  ];
};

// QuestionCard Component
const QuestionCard = ({ question, userAnswers, handleAnswerInput }) => (
  <Card key={question.id} className="shadow-lg mb-4">
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
);

// SolutionCard Component
const SolutionCard = ({ question, userAnswers }) => (
  <Card key={question.id} className="mb-4 p-4">
    <div className="space-y-4">
      <div className="font-medium">Soal No {question.id}</div>
      <p className="text-gray-700">{question.question}</p>
    </div>
    <pre className="whitespace-pre-wrap font-mono text-sm mt-4">
      {question.solution}
    </pre>
    <div className="mt-2">
      <span className={`text-lg ${parseFloat(userAnswers[question.id]) === parseFloat(question.answer) ? 'text-green-500' : 'text-red-500'}`}>
        {parseFloat(userAnswers[question.id]) === parseFloat(question.answer) ? 'Benar' : 'Salah'}
      </span>
    </div>
  </Card>
);

// ProgressCircle Component
const ProgressCircle = ({ progress }) => (
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
);

// NavigationPanel Component
const NavigationPanel = ({ navigationSections, currentSection, handleSectionChange }) => (
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
);

// SubmitButton Component
const SubmitButton = ({ setSubmitted }) => (
  <div className="mt-6">
    <Button
      onClick={() => setSubmitted(true)}
      fullWidth
      color="success"
    >
      Submit Soal
    </Button>
  </div>
);

const Quiz = () => {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const navigationSections = ['Nomor 1 - 3', 'Nomor 4 - 6', 'Nomor 7 - 9'];

  // Initialize questions on mount
  useEffect(() => {
    setActiveQuestions(generateQuestions());
  }, []);

  const getCurrentQuestions = () => {
    const startIndex = currentSection * 3;
    return activeQuestions.slice(startIndex, startIndex + 3);
  };

  const handleAnswerInput = (questionId, value) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  useEffect(() => {
    const answeredQuestions = Object.keys(userAnswers).length;
    const newProgress = Math.round((answeredQuestions / activeQuestions.length) * 100);
    setProgress(newProgress);
  }, [userAnswers, activeQuestions.length]);

  const getCorrectAnswersCount = () => {
    return activeQuestions.reduce((count, question) => {
      return parseFloat(userAnswers[question.id]) === parseFloat(question.answer) ? count + 1 : count;
    }, 0);
  };

  return (
    <main className="mx-24">
      <Navbar />
      <div className="flex justify-center items-center min-h-[94.8dvh] relative">
        <div className="flex gap-4 p-4">
          <div className="flex-1">
            {!submitted ? (
              getCurrentQuestions().map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  userAnswers={userAnswers}
                  handleAnswerInput={handleAnswerInput}
                />
              ))
            ) : (
              <div className="space-y-4">
                {activeQuestions.map((question) => (
                  <SolutionCard
                    key={question.id}
                    question={question}
                    userAnswers={userAnswers}
                  />
                ))}
                <div className="mt-6 font-medium">
                  Total Benar: {getCorrectAnswersCount()} dari {activeQuestions.length}
                </div>
              </div>
            )}
          </div>

          <div className="w-64 space-y-4">
            <ProgressCircle progress={progress} />
            {!submitted && (
              <NavigationPanel
                navigationSections={navigationSections}
                currentSection={currentSection}
                handleSectionChange={setCurrentSection}
              />
            )}
            <SubmitButton setSubmitted={setSubmitted} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Quiz;
