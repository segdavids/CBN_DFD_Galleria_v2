import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsViewComponent } from './sectors-view.component';

describe('SectorsViewComponent', () => {
  let component: SectorsViewComponent;
  let fixture: ComponentFixture<SectorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
