import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  public question = '';
  public tags = [];
  public completeChoices = ['Matemática', 'Português', 'Física', 'Química', 'História'];

  constructor(
    private router: Router,
  ) {}

  public irParaPesquisa() {
    const dados = {
      question: this.question,
      tags: this.tags,
    };
    const dadosStr = JSON.stringify(dados);
    this.router.navigate(['/specialists/' + dadosStr ]);
  }
}
