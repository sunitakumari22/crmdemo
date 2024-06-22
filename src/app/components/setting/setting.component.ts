import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { CategoryComponent } from "../category/category.component";
import { FeechartComponent } from "../feechart/feechart.component";

@Component({
    selector: 'app-setting',
    standalone: true,
    templateUrl: './setting.component.html',
    styleUrl: './setting.component.css',
    imports: [CardsComponent, CategoryComponent, FeechartComponent]
})
export class SettingComponent {

}
