import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 3),
        new Ingredient('Apple', 5),
        new Ingredient('Sugar', 150),
        new Ingredient('Flour', 300),
        new Ingredient('Egg', 6),
        new Ingredient('Chocolate', 250),
    ];

    getShoppingList() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
