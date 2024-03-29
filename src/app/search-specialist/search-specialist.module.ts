import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSpecialistComponent } from './search-specialist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgmatModule } from '../ngmat/ngmat.module';

const routes: Routes = [
    {path: ':data', component: SearchSpecialistComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgmatModule,
  ],
  declarations: [SearchSpecialistComponent]
})
export class SearchSpecialistModule { }
