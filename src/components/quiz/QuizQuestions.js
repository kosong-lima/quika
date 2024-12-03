'use client';

import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import Navbar from '../navbar';

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

  // Additional question generation functions go here ...

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



<main className="mx-24">
  <Navbar />
  <div className="flex justify-center items-center min-h-[94.8dvh] relative">
    <div className="flex gap-4 p-4">
      {/* Main Content */}
      <div className="flex-1">
        {!submitted ? (
          getCurrentQuestions().map((question) => (
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
          ))
        ) : null}
      </div>
    </div>
  </div>
</main>