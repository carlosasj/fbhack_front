import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialist-screen',
  templateUrl: './specialist-screen.component.html',
  styleUrls: ['./specialist-screen.component.scss']
})
export class SpecialistScreenComponent implements OnInit {

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
      question: 'Quanto é 1+1?',
      skills:['Matemática'],
      interestSpecialist: false,
    },
    {
      question: 'Quanto é 0b010101010 ?',
      skills:['Computer Science'],
      interestSpecialist: false,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
