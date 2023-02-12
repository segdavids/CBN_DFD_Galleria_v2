import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 3
      },
    },
    nav: true,
    navText: ["<img class='nav-button owl-prev'  src='assets/icons/left-arrow.svg'>", "<img class='nav-button owl-next'  src='assets/icons/right-arrow.svg'>"],
  }

}
