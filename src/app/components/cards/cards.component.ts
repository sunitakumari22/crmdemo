import { Component,  } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
