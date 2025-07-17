import { Component, inject } from '@angular/core';
import { Question as Ques, Service } from '../services/service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Question } from '../components/question/question';

interface QuestionVm extends Ques {
  expand: boolean;
}

@Component({
  selector: 'app-faq-page',
  imports: [AsyncPipe, Question],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.css',
})
export class FaqPage {
  private service = inject(Service);

  questions$: Observable<QuestionVm[]>;

  constructor() {
    this.questions$ = this.service.getQuestions().pipe(
      map((qs) =>
        qs.map((q, i) => {
          return {
            ...q,
            expand: i === 0,
          };
        }),
      ),
    );
  }
}
