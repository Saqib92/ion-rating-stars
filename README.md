<h1 align="center">ion-rating-stars</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/saqib92/ion-rating-stars#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/saqib92/ion-rating/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/saqib92/ion-rating/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## ✅ Prerequisites <a name = "prerequisites"></a>

The current version of the library is compatible with Ionic 7+.

## ⬇️ Install <a name = "install"></a>

Using npm

```sh
npm install ion-rating-stars --save
```

Using yarn

```sh
yarn add ion-rating-stars
```

## 🛠 Setup <a name = "setup"></a>

For version < 1.3.x (ngModule)
Once installed you need to import our module in the parent module for the component you will be using it in:

```js
import { IonRatingStarsModule } from 'ion-rating-stars';

@NgModule({
  ...
  imports: [IonRatingStarsModule, ...],
  ...
})
export class YourModule {
}
```

For version > 1.3.x (standalone components)
Once installed you need to import it directly in component, you will be using it in:

```js
import { IonRatingStarsComponent } from 'ion-rating-stars';

@Component({
  ...
  imports: [IonRatingStarsComponent, ...],
  ...
})
```

## Usage <a name = "usage"></a>

Include the component on page template, like the example below:

```
  <ion-rating-stars
  [rating]="3"
  [color]="'darkgrey'"
  [filledColor]="'orange'"
  [margin]="2"
  [size]="20"
  [disabled]="false"
  [opacity]="0.5"
  [isHalfStar]="true"
  (ratingChange)="ratingChanged($event)"></ion-rating-stars>
```

### API

### Properties

- rating: `number` [0-5].
- color: `string` color of stars. applies as `color` default `darkgrey`.
- filledColor: `string` filledColor of stars. applies as `color` default `orange`.
- margin: `number` space between stars in pixels. applies as `margin-right`. default `20`.
- size: `number` size of stars. applies as `font-size`. default `20`.
- disabled: `boolean` disables the events and anything on ratings. applies as `pointer-events`. default `false`.
- opacity: `number` change stars opacity when disabled is true. applies as `number` default `0.5`
- isHalfStar: `boolean` to Enable/Disable half stars. applies as `boolean` default `false`

### Events

- ratingChange: `EventEmitter<number>, called whenever you change a rating value`

## Author <a name = "author"></a>

👤 **Najam Us Saqib**

- Github: [@saqib92](https://github.com/saqib92)

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](https://github.com/saqib92/ion-rating-stars/issues).

## Show your support <a name = "support"></a>

Give a ⭐️ if this project helped you!

## 📝 License <a name = "license"></a>

Copyright © 2023 [Saqb92](https://github.com/saqib92).<br />
This project is [MIT](https://github.com/saqib92/ion-rating-stars/blob/master/LICENSE) licensed.
