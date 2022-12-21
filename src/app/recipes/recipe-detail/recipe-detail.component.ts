import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailsComponent {
    @Input() recipe: Recipe;

    onDetailsClose() {
        this.recipe = null;
    }
}
