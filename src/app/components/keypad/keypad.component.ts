import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {
  public btnString: string = 'Aceptar';

  constructor(public questionService: QuestionService) {}

  ngOnInit(): void {}

  next() {
    switch (this.btnString) {
      case 'Aceptar': {
        this.questionService.confirmedAnswer = true;
        this.btnString = 'Siguiente';
      }
    }
  }
}
