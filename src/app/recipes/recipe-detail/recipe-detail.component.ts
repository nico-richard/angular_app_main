import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailsComponent {
    constructor(
        private recipeService: RecipeService,
        private shoppingListService: ShoppingListService
    ) {}

    get recipeSelected() {
        return this.recipeService.recipeSelected;
    }
    set recipeSelected(value: Recipe | null) {
        this.recipeService.recipeSelected = value;
    }

    onDetailsClose() {
        this.recipeSelected = null;
    }

    addToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach((ingredient) =>
            this.shoppingListService.addIngredient(ingredient)
        );
    }
}
