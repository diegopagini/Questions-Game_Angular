import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswersComponent } from './components/answers/answers.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: 'dashboard', component: DahsboardComponent },
  { path: 'question', component: QuestionsComponent },
  { path: 'answer', component: AnswersComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
