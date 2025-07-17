import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.css',
  host: {
    '(click)': 'onClick($event)',
    '[class]': "'flex flex-col gap-6 hover:cursor-pointer'",
  },
})
export class Question {
  question = input.required<string>();
  answer = input.required<string>();
  expand = input<boolean>(false);

  protected _expand = signal<boolean>(false);

  constructor() {
    this._expand.set(this.expand());
  }

  onClick(event: MouseEvent) {
    this.toggleExpand();
  }

  toggleExpand() {
    this._expand.update((value) => !value);
  }
}
