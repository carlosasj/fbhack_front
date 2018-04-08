import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialist-screen',
  templateUrl: './specialist-screen.component.html',
  styleUrls: ['./specialist-screen.component.scss']
})
export class SpecialistScreenComponent {

  public specialist = {
      name: 'Amanda Rocha Sousa',
      skills: ['Física', 'Química'],
      photo: 'https://placeimg.com/500/500/people?t=1523140439617',
      rating: 4,
      interestSpecialist: true,
      calledForAttention: false,
    };

  public questions = [
    {
      question: 'Quanto vale 1 mol?',
      skills:['Física', 'Quimica'],
      interestSpecialist: true,
    },
    {
      question: 'Como calcular a gravidade de dois corpos?',
      skills:['Física'],
      interestSpecialist: false,
    },
    {
      question: 'Como balancear uma equação?',
      skills:['Química'],
      interestSpecialist: false,
    }
  ];

  constructor(
    private router: Router,
  ) { }

  public startChat(user) {
    this.router.navigate(['/chat/' + 'btc0l5_' ]);
  }

}
