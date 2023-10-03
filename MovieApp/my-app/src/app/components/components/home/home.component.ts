import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('sliderContainer', { static: true })
  sliderContainer!: ElementRef;
  scrollAmount = 0;

  onPrevClick() {
    this.scrollAmount -= 300;
    if (this.scrollAmount < 0) {
      this.scrollAmount = 0;
    }
    this.sliderContainer.nativeElement.scroll({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }

  onNextClick() {
    this.scrollAmount += 300;
    const maxScroll =
      this.sliderContainer.nativeElement.scrollWidth -
      this.sliderContainer.nativeElement.clientWidth;
    if (this.scrollAmount > maxScroll) {
      this.scrollAmount = maxScroll;
    }
    this.sliderContainer.nativeElement.scroll({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }
}
