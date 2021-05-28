import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {
  public btnString: string = 'Aceptar';

  constructor(
    public questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  next() {
    switch (this.btnString) {
      case 'Aceptar': {
        this.questionService.confirmedAnswer = true;
        this.btnString = 'Siguiente';
        if (
          this.questionService.questions.length - 1 ===
          this.questionService.questionIndex
        ) {
          this.btnString = 'Finalizar';
        }
        break;
      }
      case 'Siguiente': {
        this.questionService.questionIndex++;
        this.questionService.userAnswers.push(this.questionService.answerIndex);
        this.questionService.btnDisabled = true;
        this.questionService.confirmedAnswer = false;
        this.btnString = 'Aceptar';
        break;
      }
      case 'Finalizar': {
        this.questionService.userAnswers.push(this.questionService.answerIndex);
        this.questionService.answerSelected = null;
        this.questionService.confirmedAnswer = false;
        this.questionService.questionIndex = 0;
        this.router.navigate(['/answer']);
      }
    }
  }
}
