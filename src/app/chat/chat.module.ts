import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { Routes, RouterModule } from '@angular/router';
import { NgmatModule } from '../ngmat/ngmat.module';
import { StreamComponent } from './stream.component';


const routes: Routes = [
    {path: ':roomId', component: ChatComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgmatModule,
  ],
  declarations: [
    ChatComponent,
    StreamComponent,
  ]
})
export class ChatModule { }
