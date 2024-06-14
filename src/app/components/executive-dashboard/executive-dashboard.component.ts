import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { CategoryComponent } from "../category/category.component";
import { FeechartComponent } from "../feechart/feechart.component";

@Component({
    selector: 'app-executive-dashboard',
    standalone: true,
    templateUrl: './executive-dashboard.component.html',
    styleUrl: './executive-dashboard.component.css',
    imports: [CardsComponent, CategoryComponent, FeechartComponent]
})
export class ExecutiveDashboardComponent {

}
