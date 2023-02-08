import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocalSectorsCardsComponent } from './focal-sectors-cards.component';

describe('FocalSectorsCardsComponent', () => {
  let component: FocalSectorsCardsComponent;
  let fixture: ComponentFixture<FocalSectorsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocalSectorsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocalSectorsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
