import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialistScreenComponent } from './specialist-screen.component';
import { Routes, RouterModule } from '@angular/router';
import { NgmatModule } from '../ngmat/ngmat.module';

const routes: Routes = [
    {path: '', component: SpecialistScreenComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgmatModule,
  ],
  declarations: [SpecialistScreenComponent]
})
export class SpecialistScreenModule { }
