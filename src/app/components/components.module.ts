import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DahsboardModule } from './dahsboard/dahsboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { KeypadModule } from './keypad/keypad.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DahsboardModule,
    NavbarModule,
    QuestionsModule,
    AnswersModule,
    KeypadModule,
  ],
  exports: [
    DahsboardModule,
    NavbarModule,
    QuestionsModule,
    AnswersModule,
    KeypadModule,
  ],
})
export class ComponentsModule {}
