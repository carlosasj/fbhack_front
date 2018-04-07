import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { Routes, RouterModule } from '@angular/router';
import { NgmatModule } from '../ngmat/ngmat.module';

const routes: Routes = [
    {path: '', component: QuestionComponent},
];

@NgModule({
  imports: [
    CommonModule,
    NgmatModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuestionComponent]
})
export class QuestionModule { }
