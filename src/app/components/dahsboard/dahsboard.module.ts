import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DahsboardComponent } from './dahsboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DahsboardComponent],
  imports: [CommonModule, RouterModule],
  exports: [DahsboardComponent],
})
export class DahsboardModule {}
