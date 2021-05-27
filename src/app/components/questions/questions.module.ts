import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { KeypadModule } from '../keypad/keypad.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, KeypadModule, MaterialModule],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
