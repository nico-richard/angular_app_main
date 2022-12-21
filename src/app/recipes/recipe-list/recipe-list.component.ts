import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe, recipes } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
    recipes: Recipe[] = recipes;

    @Output() getDetails = new EventEmitter<Recipe>();

    onGetDetails(recipe: Recipe) {
        this.getDetails.emit(recipe);
    }
}
