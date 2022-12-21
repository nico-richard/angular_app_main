import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientService } from '../shared/ingredients.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: [IngredientService],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private ingredientService: IngredientService) {}

    ngOnInit() {
        this.ingredients = this.ingredientService.ingredients;
    }
}
