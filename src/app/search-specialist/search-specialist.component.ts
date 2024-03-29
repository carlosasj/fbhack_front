import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-specialist',
  templateUrl: './search-specialist.component.html',
  styleUrls: ['./search-specialist.component.scss']
})
export class SearchSpecialistComponent implements OnInit {

  public question = '';
  public tags = [];
  public specialists = [
    {
      name: 'Amanda Rocha Sousa',
      skills: ['Física', 'Química'],
      photo: 'https://placeimg.com/500/500/people?t=1523140439617',
      rating: 4,
      interestSpecialist: true,
      calledForAttention: false,
      price: 'R$ 20,00/h'
    },
    {
      name: 'Júlio Fernandes Cardoso',
      skills: ['Física', 'Biologia'],
      photo: 'https://placeimg.com/500/500/people?t=1523140454457',
      rating: 3,
      interestSpecialist: false,
      calledForAttention: false,
      price: 'R$ 15,00/h'
    },
    {
      name: 'Sarah Rocha Correia',
      skills: ['Física', 'História'],
      photo: 'https://placeimg.com/500/500/people?t=1523140474538',
      rating: 5,
      interestSpecialist: false,
      calledForAttention: false,
      price: 'R$ 22,00/h'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const data = JSON.parse(this.route.snapshot.params.data);
    this.question = data.question;
    this.tags = data.tags;
  }

  public callForAttention(specialist) {
    specialist.calledForAttention = true;
  }

  public startChat(specialist) {
    this.router.navigate(['/chat/' + 'btc0l5' ]);
  }

}
