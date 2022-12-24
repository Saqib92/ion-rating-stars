import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRatingStarsComponent } from './ion-rating-stars.component';

describe('IonRatingStarsComponent', () => {
  let component: IonRatingStarsComponent;
  let fixture: ComponentFixture<IonRatingStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonRatingStarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonRatingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
