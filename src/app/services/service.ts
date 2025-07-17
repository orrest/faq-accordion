import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Question {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root',
})
export class Service {
  private http = inject(HttpClient);

  getQuestions() {
    return this.http.get<Question[]>('./assets/data/data.json');
  }
}
