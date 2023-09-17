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
  @Input() opacity: number = 0.5;
  @Input() isHalfStar: boolean = false;

  @Output() ratingChange = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  rateChange(i: number) {
    if(this.isHalfStar){
      if (this.rating === i + 0.5) {
        // If the clicked star is already half-filled, make it full
        this.rating = i + 1;
      } else if (this.rating === i + 1) {
        // If the clicked star is already full, make it empty
        this.rating = i + 0.5;
      } else {
        // Otherwise, set it to half-filled
        this.rating = i + 0.5;
      }
    }else{
      this.rating = i + 1;
    }
    this.ratingChange.emit(this.rating);
  }

  getStarColor(index: number): string {
    if (this.rating >= index + 1) {
      return this.filledColor;
    } else if (this.rating >= index + 0.5) {
      return this.filledColor;
    } else {
      return this.color;
    }
  }

}
