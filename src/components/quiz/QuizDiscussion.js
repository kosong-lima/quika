import React from 'react';

const QuizDiscussion = ({ correctAnswers, questions }) => {
  return (
    <div>
      <h1>Pembahasan Quiz</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <p>Jawaban yang benar: {question.correctAnswer}</p>
          <p>Your answer: {correctAnswers[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizDiscussion;
