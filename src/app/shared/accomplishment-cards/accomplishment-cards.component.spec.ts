import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentCardsComponent } from './accomplishment-cards.component';

describe('AccomplishmentCardsComponent', () => {
  let component: AccomplishmentCardsComponent;
  let fixture: ComponentFixture<AccomplishmentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomplishmentCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomplishmentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
