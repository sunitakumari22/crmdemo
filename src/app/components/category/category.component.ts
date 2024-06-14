import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
