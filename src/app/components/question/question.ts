import { Component, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.css',
  host: {
    '[class]': "'flex flex-col gap-6'",
  },
})
export class Question implements OnInit {
  question = input.required<string>();
  answer = input.required<string>();
  expand = input<boolean>(false);

  protected _expand = signal<boolean>(false);

  /**
   * The `ngOnInit` method is called after the `ctor` and the first call of
   * `ngOnChanges`.
   * I intend to use this signal as the proxy var of the `expand` input, which
   * is not writable.
   */
  ngOnInit(): void {
    this._expand.set(this.expand());
  }

  onClick(event: MouseEvent) {
    this.toggleExpand();
  }

  toggleExpand() {
    this._expand.update((value) => !value);
  }
}
