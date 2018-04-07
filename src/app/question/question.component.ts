import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  public question = '';
  public tags = [];
  public completeChoices = ['Matemática', 'Português', 'Física', 'Química', 'História'];

  public irParaPesquisa() {
    const dados = {
      question: this.question,
      tags: this.tags,
    };

  }
}
