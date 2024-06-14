import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { CategoryComponent } from "../category/category.component";
import { FeechartComponent } from "../feechart/feechart.component";

@Component({
    selector: 'app-cloudashboard',
    standalone: true,
    templateUrl: './cloudashboard.component.html',
    styleUrl: './cloudashboard.component.css',
    imports: [CardsComponent, CategoryComponent, FeechartComponent]
})
export class CloudashboardComponent {

}
