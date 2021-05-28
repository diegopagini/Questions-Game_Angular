import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersComponent } from './answers.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [AnswersComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AnswersComponent],
})
export class AnswersModule {}
