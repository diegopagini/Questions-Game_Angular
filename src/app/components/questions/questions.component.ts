import { Component } from '@angular/core';
import { Answer } from 'src/app/models/answer.interface';
import { Question } from 'src/app/models/question.interface';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  public questions: Question[];
  constructor(public questionService: QuestionService) {
    this.questions = this.questionService.getQuestions();
  }

  getQuestion() {
    return this.questions[this.questionService.questionIndex].description;
  }

  selectedQuestion(answer: Answer, index: number) {
    if (this.questionService.confirmedAnswer === true) {
      return;
    }
    this.questionService.answerSelected = answer;
    this.questionService.btnDisabled = false;
    this.questionService.answerIndex = index;
  }

  addClassOption(answer: Answer) {
    if (
      answer === this.questionService.answerSelected &&
      !this.questionService.confirmedAnswer
    ) {
      return 'active text-light';
    } else if (
      answer === this.questionService.answerSelected &&
      this.questionService.confirmedAnswer &&
      this.questionService.answerSelected.isCorrect === 1
    ) {
      return 'list-group-item-success';
    } else if (
      answer === this.questionService.answerSelected &&
      this.questionService.confirmedAnswer &&
      this.questionService.answerSelected.isCorrect === 0
    ) {
      return 'list-group-item-danger';
    }
  }

  iconCorrect(answer: Answer) {
    if (
      answer === this.questionService.answerSelected &&
      this.questionService.confirmedAnswer &&
      this.questionService.answerSelected.isCorrect === 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  iconIncorrect(answer: Answer) {
    if (
      answer === this.questionService.answerSelected &&
      this.questionService.confirmedAnswer &&
      this.questionService.answerSelected.isCorrect === 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
