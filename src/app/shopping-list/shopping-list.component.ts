import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Tomato', 3),
        new Ingredient('Apple', 5),
        new Ingredient('Sugar', 150),
        new Ingredient('Flour', 300),
        new Ingredient('Egg', 6),
        new Ingredient('Chocolate', 250),
    ];
}
