'use client'
import React, { useState } from 'react';
import QuizIntro from '../../components/quiz/QuizIntro';
import QuizQuestions from '../../components/quiz/QuizQuestions';
import QuizDiscussion from '../../components/quiz/QuizDiscussion';

const quizData = [
  { question: "Apa ibu kota Indonesia?", correctAnswer: "Jakarta" },
  { question: "Apa warna bendera Indonesia?", correctAnswer: "Merah Putih" },
  // Tambahkan soal-soal lainnya
];

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const finishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div>
      {!quizStarted && !quizFinished && <QuizIntro onStartQuiz={startQuiz} />}
      {quizStarted && !quizFinished && (
        <QuizQuestions questions={quizData} onNext={() => {}} onFinish={finishQuiz} />
      )}
      {quizFinished && <QuizDiscussion correctAnswers={answers} questions={quizData} />}
    </div>
  );
};

export default QuizPage;
