import { Ingredient } from './ingredient.model';

export class IngredientService {
    ingredients: Ingredient[] = [
        new Ingredient('Tomato', 3),
        new Ingredient('Apple', 5),
        new Ingredient('Sugar', 150),
        new Ingredient('Flour', 300),
        new Ingredient('Egg', 6),
        new Ingredient('Chocolate', 250),
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}
