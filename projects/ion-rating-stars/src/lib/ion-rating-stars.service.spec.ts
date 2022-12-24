import { TestBed } from '@angular/core/testing';

import { IonRatingStarsService } from './ion-rating-stars.service';

describe('IonRatingStarsService', () => {
  let service: IonRatingStarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonRatingStarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
