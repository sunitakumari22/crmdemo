import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  stars: boolean[] = Array(5).fill(false);

  constructor() {}

  rate(index: number) {
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
  }

  resetStars() {
    this.stars = this.stars.map(_ => false);
  }

  highlight(index: number) {
    this.stars = this.stars.map((_, i) => i <= index);
  }

}
