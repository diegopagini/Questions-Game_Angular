import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question.interface';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent {
  public questionList: Question[];
  public answerList: any[];

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {
    this.questionList = this.questionService.questions;
    this.answerList = this.questionService.userAnswers;
  }

  return() {
    this.questionService.userAnswers = [];
    this.router.navigate(['/dashboard']);
  }
}
