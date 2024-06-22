import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { CategoryComponent } from "../category/category.component";
import { FeechartComponent } from "../feechart/feechart.component";

@Component({
    selector: 'app-faqdashboard',
    standalone: true,
    templateUrl: './faqdashboard.component.html',
    styleUrl: './faqdashboard.component.css',
    imports: [CardsComponent, CategoryComponent, FeechartComponent]
})
export class FaqdashboardComponent {

}
