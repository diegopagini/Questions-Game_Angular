import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.interface';
import { Question } from '../models/question.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  public index: number = 0;
  public answerSelected: Answer;
  public btnDisabled: boolean = true;
  public confirmedAnswer: boolean = false;
  public answerIndex;
  public userAnswers: number[] = [];
  public questions: Question[] = [
    {
      description: '¿Cual es la capital de Argentina?',
      answers: [
        { name: 'Buenos Aires', isCorrect: 1 },
        { name: 'Mar del Plata', isCorrect: 0 },
        { name: 'Lima', isCorrect: 0 },
        { name: 'Montevideo', isCorrect: 0 },
      ],
    },
    {
      description: '¿Cual es la capital de Francia?',
      answers: [
        { name: 'Roma', isCorrect: 0 },
        { name: 'Paris', isCorrect: 1 },
        { name: 'Dublin', isCorrect: 0 },
        { name: 'Atenas', isCorrect: 0 },
      ],
    },
    {
      description: '¿Cual es la capital de Egipto?',
      answers: [
        { name: 'Londres', isCorrect: 0 },
        { name: 'Berlin', isCorrect: 0 },
        { name: 'El Cairo', isCorrect: 1 },
        { name: 'Casablanca', isCorrect: 0 },
      ],
    },
  ];

  constructor() {}

  getQuestions() {
    return this.questions.slice();
  }
}
