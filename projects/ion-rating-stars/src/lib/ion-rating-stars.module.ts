import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonRatingStarsComponent } from './ion-rating-stars.component';

@NgModule({
  declarations: [
    IonRatingStarsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    IonRatingStarsComponent
  ]
})
export class IonRatingStarsModule { }
