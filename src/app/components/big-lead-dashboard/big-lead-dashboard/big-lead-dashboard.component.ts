import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { FeechartComponent } from "../feechart/feechart.component";
import { CategoryComponent } from "../category/category.component";

@Component({
    selector: 'app-big-lead-dashboard',
    standalone: true,
    templateUrl: './big-lead-dashboard.component.html',
    styleUrl: './big-lead-dashboard.component.css',
    imports: [CardsComponent, FeechartComponent, CategoryComponent]
})
export class BigLeadDashboardComponent {

}
