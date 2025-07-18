import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPage } from './faq-page';

describe('FaqPage', () => {
  let component: FaqPage;
  let fixture: ComponentFixture<FaqPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
