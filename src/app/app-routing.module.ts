import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/question/question.module#QuestionModule'},
  { path: 'specialists', loadChildren: 'app/search-specialist/search-specialist.module#SearchSpecialistModule'},
  { path: 'chat', loadChildren: 'app/chat/chat.module#ChatModule'},
  // { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
