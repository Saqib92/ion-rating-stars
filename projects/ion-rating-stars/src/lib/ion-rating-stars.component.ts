import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ion-rating-stars',
  templateUrl: 'ion-rating-stars.html',
  styles: [
  ]
})
export class IonRatingStarsComponent implements OnInit {
  stars = [1, 2, 3, 4, 5];

  @Input() rating: number = 0;
  @Input() size: number = 20;
  @Input() color: string = 'grey';
  @Input() filledColor: string = 'orange'
  @Input() margin: number = 5;
  @Input() disabled: boolean = false;
  @Output() ratingChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  rateChange(i: number) {
    this.rating = (i + 1);
    this.ratingChange.emit(i + 1);
  }

}
