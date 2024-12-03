'use client';

import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import Navbar from '../navbar';

const QuizIntro = ({ onStartQuiz }) => {
  return (
    <main className="mx-24 h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <Card className="w-96 shadow-xl">
          <CardHeader>
            <p className='items-center'>QUIKA | Quizz Fisika</p>
          </CardHeader>
          <CardBody>
            <p>Siap memulai quizz?, Tekan tombol Mulai quiz</p>
          </CardBody>
          <CardFooter>
            <Button onClick={onStartQuiz} color="primary" className="w-full">
              Mulai Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default QuizIntro;