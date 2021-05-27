import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeypadComponent } from './keypad.component';

@NgModule({
  declarations: [KeypadComponent],
  imports: [CommonModule],
  exports: [KeypadComponent],
})
export class KeypadModule {}
