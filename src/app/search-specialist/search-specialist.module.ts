import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSpecialistComponent } from './search-specialist.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: SearchSpecialistComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SearchSpecialistComponent]
})
export class SearchSpecialistModule { }
